const DietRequest = require("../models/DietRequest.js");
const sendMail = require("../utils/sendMail");

exports.createDietRequest = async (req, res) => {
  try {
    const { email } = req.body;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const alreadySubmitted = await DietRequest.findOne({
      email,
      createdAt: { $gte: startOfDay },
    });

    if (alreadySubmitted) {
      return res.status(400).json({
        success: false,
        message: "You've already submitted today. Try again tomorrow.",
      });
    }

    const diet = new DietRequest(req.body);
    await diet.save();

    await sendMail(
      "📋 New Diet Plan Request",
      `
      <h2>New Diet Plan Request</h2>
      <p><strong>Name:</strong> ${diet.name}</p>
      <p><strong>Email:</strong> ${diet.email}</p>
      <p><strong>Age:</strong> ${diet.age}</p>
      <p><strong>Diet Type:</strong> ${diet.dietType}</p>
      <p><strong>Conditions:</strong> ${diet.conditions?.join(", ")}</p>
      <p><strong>Message:</strong> ${diet.message}</p>
      `
    );

    res.status(200).json({ success: true, message: "Request saved!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};



exports.getAllDietRequests = async (req, res) => {
  try {
    const all = await DietRequest.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


