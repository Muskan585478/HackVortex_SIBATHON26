import React, { useState } from "react";

function ReportUpload() {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState("english");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
      <div style={styles.card}>
        <h2 style={styles.title}>🩺 Health Report Simplifier</h2>
        <p style={styles.subtitle}>
          Upload your medical report and get simplified explanation
        </p>

        <label style={styles.label}>Upload Medical Report (PDF)</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          style={styles.input}
        />

        <label style={styles.label}>Select Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={styles.select}
        >
          <option value="english">English</option>
          <option value="urdu">Urdu</option>
          <option value="sindhi">Sindhi</option>
        </select>

        <button style={styles.button} onClick={handleUpload}>
          Upload & Simplify
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f9fc", // soft medical background
    fontFamily: "Segoe UI",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    width: "350px",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0, 123, 255, 0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  title: {
    textAlign: "center",
    color: "#0d6efd", // medical blue
    marginBottom: "5px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "15px",
  },
  label: {
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ReportUpload;
