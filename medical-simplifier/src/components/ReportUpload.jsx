import React, { useState } from "react";
import axios from "axios";

const ReportUpload = () => {
  const [reportText, setReportText] = useState("");
  const [language, setLanguage] = useState("English");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/simplify", {
        reportText,
        language,
      });

      setResult(response.data.simplifiedText);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Medical Report Simplifier</h2>

      <form onSubmit={handleSubmit}>
        {/* Report Input */}
        <textarea
          rows="8"
          placeholder="Paste medical report here..."
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
          required
        />

        {/* Language Selection */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ marginBottom: "10px" }}
        >
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Sindhi">Sindhi</option>
        </select>

        <br />

        <button type="submit">Simplify Report</button>
      </form>

      {/* Output Section */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default ReportUpload;
