const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
  date: String,
  time: String,
  issue: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Consultation", ConsultationSchema);
