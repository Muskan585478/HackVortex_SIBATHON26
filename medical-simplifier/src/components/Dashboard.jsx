import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🩺 Health Portal Dashboard</h2>
        <p style={styles.subtitle}>
          Manage your medical reports and interpretations
        </p>

        {/* NEW REPORT */}
        <button
          style={styles.primaryButton}
          onClick={() => navigate("/report-upload")}
        >
          + New Report Interpretation
        </button>

        {/* HISTORY */}
        <button
          style={styles.secondaryButton}
          onClick={() => navigate("/history")}
        >
          📁 View Previous Results
        </button>

        {/* LOGOUT */}
        <button
          style={styles.logoutButton}
          onClick={() => navigate("/")}
        >
          🚪 Logout
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
    backgroundColor: "#eef6fb",
    fontFamily: "Segoe UI",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "45px",
    width: "380px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(13,110,253,0.15)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  title: {
    color: "#0d6efd",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "20px",
  },
  primaryButton: {
    padding: "14px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "14px",
    backgroundColor: "#17a2b8",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "12px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Dashboard;