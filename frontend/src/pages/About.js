import React from "react";
import "../App.css";
import img1 from "../assets/img1.JPG"; 
import img2 from "../assets/img2.jpg";


function About() {
  const styles = {
    page: {
      fontFamily: "Segoe UI, sans-serif",
      background: "linear-gradient(to right, #e8f5e9, #f1f8e9)",
      minHeight: "100vh",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    container: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      padding: "40px",
      maxWidth: "1000px",
      width: "100%",
    },
    title: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#2e7d32",
      marginBottom: "30px",
      textAlign: "center",
    },
    cardsContainer: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      marginBottom: "40px",
    },
    card: {
      backgroundColor: "#f1f8e9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "20px",
      textAlign: "center",
      width: "250px",
      marginBottom: "20px",
    },
    image: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "16px",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#33691e",
    },
    role: {
      fontSize: "14px",
      color: "#666",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#333",
      marginBottom: "16px",
    },
    subtitle: {
      fontSize: "18px",
      color: "#4e342e",
      marginBottom: "16px",
      textAlign: "center",
    },
    italic: {
      fontStyle: "italic",
      marginTop: "30px",
      textAlign: "center",
      color: "#6d4c41",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Meet the Developers</h1>
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <img src={img1} alt="Developer 1" style={styles.image} />
            <p style={styles.name}>Sachchidanand M Madik</p>
            <p style={styles.role}>Developer</p>
           <a
  href="https://www.linkedin.com/in/sachchidanandmadik/"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn Profile
</a>

          </div>
          <div style={styles.card}>
            <img src={img2} alt="Developer 2" style={styles.image} />
            <p style={styles.name}>Sharddhanand K Khot</p>
            <p style={styles.role}>Developer</p>
                  <a
  href="https://www.linkedin.com/in/shraddhanand-khot-570ba2243//"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn Profile
</a>
          </div>
        </div>

        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          Empowering farmers with intelligent crop disease diagnosis — anytime, anywhere.
        </p>
        <p style={styles.text}>
          <strong>AgriCropCare</strong> is a modern agricultural assistant built to support farmers,
          agronomists, and researchers in managing plant health. By leveraging advanced machine learning
          and image processing, our platform detects plant diseases from leaf images and provides actionable
          insights.
        </p>
        <p style={styles.text}>
          Traditional disease diagnosis methods can be time-consuming and prone to human error.
          AgriCropCare solves this by offering a fast, automated, and highly accurate solution.
        </p>
        <p style={styles.text}>
          Our system is trained on a diverse dataset of plant diseases, enabling it to deliver high-precision
          results for common issues affecting crops like tomatoes and more. Along with the diagnosis,
          we offer practical remedies—organic and chemical—tailored to specific conditions.
        </p>
        <p style={styles.text}>
          Whether you're a farmer in the field or a student researching agriculture, AgriCropCare is designed
          to make plant health management smarter, easier, and more efficient.
        </p>
        <p style={styles.italic}>
          Built with ❤️ using React, Flask, and Deep Learning for a healthier agricultural future.
        </p>
      </div>
    </div>
  );
}

export default About;
