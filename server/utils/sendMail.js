const nodemailer = require("nodemailer");

const sendMail = async (subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your@gmail.com",         // 🟢 Replace with real Gmail
      pass: "your_app_password",      // 🛑 Use App Password (not your login password)
    },
  });

  const mailOptions = {
    from: "your@gmail.com",
    to: "nutritionist@email.com",     // 🟢 Receiver (your gf)
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📬 Email sent!");
  } catch (err) {
    console.error("❌ Email Error:", err.message);
  }
};

module.exports = sendMail;
