const express = require("express");
const router = express.Router();
const aiController = require("../controllers/aiController");

// DO NOT use () here
router.post("/explain", aiController.explainReport);

module.exports = router;