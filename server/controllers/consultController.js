const Consultation = require("../models/Consultation.js");

exports.createConsultation = async (req, res) => {
  try {
    const { email } = req.body;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const alreadySubmitted = await Consultation.findOne({
      email,
      createdAt: { $gte: startOfDay },
    });

    if (alreadySubmitted) {
      return res.status(400).json({
        success: false,
        message: "You already booked a consultation today. Try again tomorrow.",
      });
    }

    const consult = new Consultation(req.body);
    await consult.save();

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

    res.status(200).json({ success: true, message: "Consultation booked!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


exports.getAllConsultations = async (req, res) => {
  try {
    const all = await Consultation.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




