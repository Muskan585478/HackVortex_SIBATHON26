import React, { useState } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState("english");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    alert(`File: ${file.name}\nLanguage: ${language}`);
  };

  return (
    <div style={styles.container}>
      <h2>Medical Simplifier Dashboard</h2>

      <div style={styles.card}>
        <label style={styles.label}>Upload PDF</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />

        <label style={styles.label}>Select Language</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="english">English</option>
          <option value="urdu">Urdu</option>
          <option value="sindhi">Sindhi</option>
        </select>

        <button style={styles.button} onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "30px",
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  label: {
    fontWeight: "bold",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Dashboard;