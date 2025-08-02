import { useState } from "react";
import axios from "../api/axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    date: "",
    time: "",
    issue: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://nutrition-backend-4wj5.onrender.com/api/consultation", formData);

      toast.success("✅ Consultation Booked!");
      setFormData({
        name: "",
        email: "",
        age: "",
        date: "",
        time: "",
        issue: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Consultation form error:", error.message);
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen px-4 py-16 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-green-700 text-center mb-6 mt-14">
        Book a Consultation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg bg-gradient-to-b from-green-50 to-white">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <div className="flex gap-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
        </div>
        <input
          type="text"
          name="issue"
          placeholder="Your main health issue or concern"
          value={formData.issue}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <textarea
          name="message"
          placeholder="Additional notes (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          rows={4}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 w-full"
        >
          Submit Booking
        </button>
      </form>
    </motion.div>
  );
};

export default Book;
