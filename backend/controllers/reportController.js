const Report = require("../models/Report");
const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ================= UPLOAD REPORT =================
exports.uploadReport = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // SAVE REPORT
    const newReport = new Report({
      user: req.user?._id || null,
      fileName: req.file.originalname,
      filePath: req.file.path,
    });

    await newReport.save();

    // ===== READ FILE TEXT (optional) =====
    let prompt =
      "Explain this medical report in simple easy English for a normal person.";

    // ===== GEMINI CALL =====
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();

    // SAVE EXPLANATION
    newReport.explanation = explanation;
    await newReport.save();

    res.json({
      message: "Report uploaded successfully",
      reportId: newReport._id,
      explanation,
    });
  } catch (error) {
    console.log("UPLOAD ERROR:", error);
    res.status(500).json({
      message: "AI Failed. Check API key or model name.",
    });
  }
};

// ================= GET ALL REPORTS =================
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });

    res.json(
      reports.map((r) => ({
        id: r._id,
        fileName: r.fileName,
        date: r.createdAt,
        explanation: r.explanation,
        fileUrl: r.filePath,
      }))
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= GET SINGLE REPORT =================
exports.getReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report)
      return res.status(404).json({ message: "Report not found" });

    res.json({
      id: report._id,
      fileName: report.fileName,
      explanation: report.explanation,
      fileUrl: report.filePath,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};