const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  uploadReport,
  getReports,
  getReport,
} = require("../controllers/reportController");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("report"), uploadReport);
router.get("/", getReports);
router.get("/:id", getReport);

module.exports = router;