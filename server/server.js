const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();
const app = express();
const PORT = 5000;

// Connect DB
connectDB();

// Middleware
app.use(cors("https://nutricare-6flv.onrender.com/"));
app.use(express.json());

// Routes
app.use("/api/diet", require("./routes/dietRoutes"));
app.use("/api/consultation", require("./routes/consultRoutes"));

// Default
app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
