import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const styles = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      background: 'linear-gradient(to right, #f9f9f9, #e3f2fd)',
      color: '#333',
      padding: '40px 20px',
      minHeight: '100vh',
    },
    hero: {
      textAlign: 'center',
      padding: '60px 20px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginBottom: '40px',
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#2e7d32',
    },
    subtitle: {
      fontSize: '20px',
      marginBottom: '30px',
      color: '#555',
    },
    button: {
      backgroundColor: '#2e7d32',
      color: '#fff',
      padding: '14px 28px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    section: {
      maxWidth: '1100px',
      margin: '0 auto',
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '28px',
      color: '#1b5e20',
      marginBottom: '16px',
    },
    list: {
      paddingLeft: '20px',
      lineHeight: '1.8',
      fontSize: '16px',
    },
    howItWorksContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      alignItems: 'flex-start',
    },
    howItWorksText: {
      flex: '1 1 400px',
    },
    howItWorksImages: {
      flex: '1 1 400px',
      display: 'flex',
      flexDirection: 'row',
      gap: '15px',
    },
    imageBox: {
      width: '40%',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      objectFit: 'cover',
    },
    footer: {
      width: '100%',
      backgroundColor: '#252f25ff',
      color: '#fff',
      textAlign: 'center',
      padding: '20px 10px',
      
    },
    footerLink: {
      color: '#ffffff',
      textDecoration: 'underline',
      marginLeft: '10px',
    }
  };

  return (
    <>
      <div style={styles.page}>
        {/* Hero Section */}
        <div style={styles.hero}>
          <h1 style={styles.title}>🌿 AgriCropCare</h1>
          <p style={styles.subtitle}>
            Revolutionizing crop health monitoring with AI-powered <b>TOMATO</b> and <b>CORN</b> plant disease detection.
            Ensure healthier yields with timely diagnosis.
          </p>
          <Link to="/Detector" style={styles.button}>Start Detecting</Link>
        </div>

        {/* Features Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Key Features</h2>
          <ul style={styles.list}>
            <li><strong>Instant AI Detection:</strong> Upload a leaf image and get instant diagnosis.</li>
            <li><strong>Smart & Accurate:</strong> Uses machine learning models trained on real crop data.</li>
            <li><strong>User-Friendly Interface:</strong> Built for farmers, agronomists, and researchers alike.</li>
            <li><strong>Actionable Advice:</strong> Get treatment suggestions along with disease identification.</li>
          </ul>
        </div>

        {/* How it Works Section with Images */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>How It Works</h2>
          <div style={styles.howItWorksContainer}>
            {/* Steps */}
            <div style={styles.howItWorksText}>
              <ol style={styles.list}>
                <li>Take a clear photo of a tomato plant leaf showing symptoms.</li>
                <li>Upload it through the detection tool.</li>
                <li>Receive real-time results with disease name and suggestions.</li>
              </ol>
            </div>

            {/* Sample Images */}
            <div style={styles.howItWorksImages}>
              <img
                src="img1.png"
                alt="Step 1 - Capture"
                style={styles.imageBox}
              />
              <img
                src="img2.png"
                alt="Step 2 - Upload"
                style={styles.imageBox}
              />
              <img
                src="img3.png"
                alt="Step 3 - Results"
                style={styles.imageBox}
              />
            </div>
          </div>
        </div>

        {/* Why It Matters Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Why It Matters</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Plant diseases are one of the leading causes of crop loss globally. Early detection and prevention
            can make the difference between a poor and a productive harvest. AgriCropHealthCare empowers farmers
            with the tools they need to monitor, detect, and act — faster and smarter.
          </p>
        </div>
      </div>

      {/* Full Width Footer */}
      <footer style={styles.footer}>
        <p style={{ margin: '5px 0' }}><strong>Developed by:</strong> Sachchidanand M Madik, Shraddhanand K Khot</p>
        <p style={{ margin: '5px 0' }}>
           
          <a href="mailto:ankit@example.com" style={styles.footerLink}>sachinmadik123@gmail.com</a> | 
          <a href="mailto:rahul@example.com" style={styles.footerLink}>shra2309@gmail.com</a>
        </p>
        <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} AgriCropHealthCare. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
