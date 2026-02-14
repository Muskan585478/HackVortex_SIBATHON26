const express = require("express");
const router = express.Router();
const multer = require("multer");
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

// ROUTES
router.post("/upload", upload.single("file"), uploadReport);
router.get("/", getReports);
router.get("/:id", getReport);

module.exports = router;