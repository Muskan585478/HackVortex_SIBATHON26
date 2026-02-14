const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db"); // 👈 ADD THIS

// Load env variables
dotenv.config();
console.log("Mongo URI:", process.env.MONGO_URI);

// CONNECT DATABASE
connectDB(); // 👈 ADD THIS
const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("Health Portal Backend Running 🚀");
});

// ================= ROUTES =================
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);

// ================= PORT =================
const PORT = process.env.PORT || 5000;

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});