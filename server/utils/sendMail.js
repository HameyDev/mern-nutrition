const nodemailer = require("nodemailer");

const sendMail = async (subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mhammad.zulfiqar.se@gmail.com",         // 🟢 Replace with real Gmail
      pass: "qcxitsnwizzjnthr",      // 🛑 Use App Password (not your login password)
    },
  });

  const mailOptions = {
    from: "mhammad.zulfiqar.se@gmail.com",
    to: "laibatahircom2@gmail.com",     // 🟢 Receiver (your gf)
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
