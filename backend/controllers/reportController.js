const Report = require("../models/Report");
const path = require("path");
exports.uploadReport = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newReport = new Report({
      user: req.user?._id || null, // temp if auth not added
      fileName: req.file.filename,
      filePath: req.file.path,
    });

    await newReport.save();

    const explanation = "This is a simplified medical explanation.";

    res.json({
      explanation,
      reportId: newReport._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
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
    if (!report) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};