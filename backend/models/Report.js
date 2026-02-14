const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    fileName: String,
    filePath: String,
    explanation: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);