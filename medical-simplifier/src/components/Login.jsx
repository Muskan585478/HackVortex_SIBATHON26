import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login Successful");
        // Optional: store token
        localStorage.setItem("token", data.token);

        navigate("/dashboard");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🩺 Health Portal Login</h2>
        <p style={styles.subtitle}>Access your reports & history</p>

        <form onSubmit={handleLogin} style={styles.form}>
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

          <button type="submit" style={styles.button}>
            Login
          </button>

          <button
            type="button"
            style={styles.linkBtn}
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>
        </form>
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
    backgroundColor: "#fff",
    padding: "40px",
    width: "340px",
    borderRadius: "14px",
    boxShadow: "0 8px 25px rgba(13,110,253,0.15)",
    textAlign: "center",
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  linkBtn: {
    marginTop: "8px",
    background: "none",
    border: "none",
    color: "#0d6efd",
    cursor: "pointer",
  },
};

export default Login;