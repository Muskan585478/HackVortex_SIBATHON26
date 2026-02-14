const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    originalName: String,
    filePath: String,
    explanation: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);