const mongoose = require("mongoose");

const DietRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
  gender: String,
  weight: Number,
  height: Number,
  activityLevel: String,
  conditions: [String],
  allergies: String,
  dietType: String,
  duration: String,
  message: String,
  planId: String,         // 💥 new: to track exact plan
  planCategory: String,   // 💥 new: like "PCOS", "Weight Loss"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DietRequest", DietRequestSchema);
