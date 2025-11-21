
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function Detector() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPrediction(response.data);
      toast.success("Disease prediction successful!");
    } catch (error) {
      console.error("Prediction error:", error);
      toast.error("Prediction failed. Please try again.");
    }
  };

  const styles = {
    container: {
      fontFamily: "Segoe UI, sans-serif",
      background: "linear-gradient(to right, #f1f8e9, #e8f5e9)",
      minHeight: "100vh",
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "40px",
      maxWidth: "750px",
      width: "100%",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    heading: {
      fontSize: "32px",
      color: "#2e7d32",
      marginBottom: "20px",
    },
    fileInput: {
      margin: "20px auto",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      width: "100%",
      maxWidth: "400px",
    },
    imagePreview: {
      marginTop: "20px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      width: "300px",
      height: "auto",
    },
    button: {
      backgroundColor: "#2e7d32",
      color: "#fff",
      padding: "12px 24px",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "20px",
      transition: "background-color 0.3s ease",
    },
    resultBox: {
      backgroundColor: "#f9fbe7",
      padding: "24px",
      borderRadius: "10px",
      marginTop: "40px",
      textAlign: "left",
    },
    label: {
      fontWeight: "bold",
      color: "#33691e",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🌿 AgriCropCare – Disease Detector</h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.fileInput}
        />

        {imagePreview && (
          <div>
            <img src={imagePreview} alt="Preview" style={styles.imagePreview} />
          </div>
        )}

        &nbsp;&nbsp;<button onClick={handlePredict} style={styles.button}>
          Predict Disease
        </button>

        {prediction && (
          <div style={styles.resultBox}>
            <h2 style={{ marginBottom: "10px", color: "#558b2f" }}>Prediction Result</h2>
            <p>
              <span style={styles.label}>Disease:</span> {prediction.disease || "N/A"}
            </p>
            {prediction.confidence && (
              <p>
                <span style={styles.label}>Confidence:</span> {prediction.confidence}%
              </p>
            )}
            {prediction.remedy && (
  <div>
    <p style={styles.label}>Remedy:</p>
    <ul style={{ paddingLeft: "20px", color: "#4e342e" }}>
      {prediction.remedy
        .split(/\n|•|-|\u2022/)
        .map((item, idx) => item.trim())
        .filter((item) => item.length > 0)
        .map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
    </ul>
  </div>
)}

          </div>
        )}
      </div>
    </div>
  );
}

export default Detector;




