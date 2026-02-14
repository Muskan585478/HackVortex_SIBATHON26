const express = require("express");
const router = express.Router();
const multer = require("multer");
const reportController = require("../controllers/reportController");

// STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ROUTES
router.post("/upload", upload.single("report"), reportController.uploadReport);

router.get("/", reportController.getReports);
router.get("/:id", reportController.getReport);

module.exports = router;