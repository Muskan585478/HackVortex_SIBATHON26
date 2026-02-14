import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  // explanation comes from ReportUpload page
  const explanation = location.state?.explanation || "No data found";

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Report Explanation</h2>

        <div style={styles.resultBox}>
          {explanation}
        </div>

        <button
          style={styles.button}
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
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
    background: "#eef6fb"
  },
  card: {
    background: "#fff",
    padding: "40px",
    width: "500px",
    borderRadius: "14px",
    boxShadow: "0 8px 25px rgba(13,110,253,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  title: {
    color: "#0d6efd",
    textAlign: "center"
  },
  resultBox: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    minHeight: "150px"
  },
  button: {
    padding: "12px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold"
  }
};

export default Result;