from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
import cv2
import json
import os
import requests
from dotenv import load_dotenv

load_dotenv() 

app = Flask(__name__)
CORS(app)

model = load_model("model_compatible.h5")


with open("class_indices.json", "r") as f:
    class_indices = json.load(f)
class_names = {v: k for k, v in class_indices.items()}

CONFIDENCE_THRESHOLD = 0.6
prediction_history = []

def get_ai_remedy(disease_name):
    try:
        headers = {
            "Authorization": f"Bearer {os.getenv('OPENROUTER_API_KEY')}",
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",  
            "X-Title": "AgriCropCare"
        }

        data = {
            "model": "mistralai/mistral-7b-instruct",
            "messages": [
                {"role": "system", "content": "You are an agriculture expert helping farmers with plant disease remedies."},
                {"role": "user", "content": f"Give prevention and treatment advice for {disease_name} in crops. Respond in 3-4 lines."}
            ]
        }

        response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=data)
        result = response.json()
        return result['choices'][0]['message']['content'].strip()

    except Exception as e:
        print(" Error from OpenRouter:", e)
        return "AI-generated remedy not available currently."

@app.route('/predict', methods=['POST'])
def predict():
    try:
        file = request.files.get('image')
        if not file:
            return jsonify({"error": "No image uploaded"}), 400

        img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, (128, 128))
        img = img / 255.0

        prediction = model.predict(np.expand_dims(img, axis=0))[0]
        predicted_index = int(np.argmax(prediction))
        confidence = float(round(100 * np.max(prediction), 2))
        predicted_class = class_names[predicted_index]

        if predicted_class == "non_leaf" or confidence < (CONFIDENCE_THRESHOLD * 100):
            result = {
                "disease": "Not a valid crop/leaf image",
                "confidence": confidence,
                "remedy": "Please upload a clear image of a known leaf."
            }
        else:
            remedy = get_ai_remedy(predicted_class)
            result = {
                "disease": predicted_class,
                "confidence": confidence,
                "remedy": remedy
            }

        return jsonify(result)

    except Exception as e:
        print(" Error in /predict:", e)
        return jsonify({"error": str(e)}), 500

@app.route('/save', methods=['POST'])
def save_prediction():
    try:
        data = request.json
        prediction_history.append(data)
        return jsonify({"message": "Prediction saved!"})
    except Exception as e:
        print("Error in /save:", e)
        return jsonify({"error": str(e)}), 500

@app.route('/history', methods=['GET'])
def get_history():
    try:
        return jsonify(prediction_history)
    except Exception as e:
        print("Error in /history:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)

