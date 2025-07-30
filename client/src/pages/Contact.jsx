import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📬 Message sent successfully!");
    console.log("Contact form data:", form);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen px-4 py-16 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-green-700 mb-8 mt-14">
        Get in Touch
      </h2>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 space-y-5 bg-gradient-to-b from-green-50 to-white"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="e.g., Requesting consultation"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-green-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
    </motion.section>
  );
};

export default Contact;
