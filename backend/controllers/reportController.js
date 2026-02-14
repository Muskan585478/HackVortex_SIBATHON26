const Report = require("../models/Report");
const path = require("path");

// UPLOAD REPORT
exports.uploadReport = async (req, res) => {
  try {
    const { language, userId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newReport = new Report({
      userId,
      fileName: req.file.filename,
      filePath: `/uploads/${req.file.filename}`,
      language,
      createdAt: new Date(),
    });

    await newReport.save();

    res.status(201).json({
      message: "Report uploaded successfully",
      report: newReport,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL REPORTS (HISTORY)
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE REPORT
exports.getReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: "Not found" });
    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};