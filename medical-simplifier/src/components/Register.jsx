import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password }
      );

      alert("Registered Successfully");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleRegister} style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eef6fb",
  },
  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "14px",
    boxShadow: "0 8px 25px rgba(13,110,253,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "330px",
  },
  title: {
    color: "#0d6efd",
    textAlign: "center",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    background: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};

export default Register;