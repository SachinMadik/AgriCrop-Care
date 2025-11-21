🌿 AgriCropCare – Smart Crop Disease Detection

AgriCropCare is a full-stack AI-powered web application that helps farmers and agricultural researchers detect plant leaf diseases using deep learning.
The system uses a custom-trained CNN model and provides AI-generated remedies using OpenRouter + Mistral-7B Instruct.

🚀 Features
🌱 Frontend (React)

Clean, responsive UI (Home, Detector, About pages)

Upload leaf images for disease prediction

Real-time alerts using react-toastify

Mobile-friendly navbar with toggle menu

🤖 Backend (Flask – Python)

Loads pretrained Keras CNN model (model_compatible.h5)

Predicts plant leaf diseases from images

Fetches remedies using OpenRouter AI

In-memory storage of predictions (/history endpoint)

🗄️ Database Backend (Node.js + MongoDB)

Saves predictions permanently into MongoDB

Fetches complete prediction history with timestamps

🧠 Machine Learning (trainmodel.py)

Custom-trained CNN using TensorFlow/Keras

Includes image augmentation & early stopping

Generates class_indices.json for prediction mapping

📁 Folder Structure
root/
│── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── pages/
│   │   └── App.css
│   └── package.json
│
│── backend/
│   ├── app.py
│   ├── model_compatible.h5
│   ├── class_indices.json
│   └── .env
│
│── database/
│   └── index.js
│
└── trainmodel.py

🛠️ Tech Stack
Frontend

React.js

Backend (Prediction API)

Flask

TensorFlow / Keras

OpenRouter API

OpenCV

Python Dotenv

Database API

Node.js

Express

MongoDB + Mongoose

Machine Learning

CNN (Keras Sequential)

ImageDataGenerator (Augmentation)

⚙️ Installation & Setup
1️⃣ Frontend Setup (React)
cd frontend
npm install
npm start


Runs on: http://localhost:3000

2️⃣ Python Backend Setup (Flask)
Install dependencies:
pip install flask flask-cors tensorflow opencv-python python-dotenv requests

Run the backend:
python app.py


Runs on: http://localhost:5000

3️⃣ Node.js + MongoDB Server
cd database
npm install
node index.js


Runs on: http://localhost:4000

MongoDB must be running locally at:

mongodb://localhost:27017/crophealth

📸 How Prediction Works

User uploads a leaf image from the Detector page

Flask backend loads & preprocesses the image (128×128, normalized)

CNN model predicts the disease class

If confidence ≥ 60%, prediction is accepted

AI remedy is generated using OpenRouter + Mistral 7B

Result (disease + confidence + remedy) is displayed on UI

Prediction is saved to MongoDB for history tracking
