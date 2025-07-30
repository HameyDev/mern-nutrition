import { useParams } from "react-router-dom";
import plans from "../data/plans";
import { useState } from "react";
import axios from "../api/axios";

const PlanDetail = () => {
  const { id } = useParams();
  const plan = plans.find((p) => p.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    activityLevel: "",
    conditions: [],
    allergies: "",
    dietType: "",
    duration: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        conditions: checked
          ? [...prev.conditions, value]
          : prev.conditions.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/diet-requests", formData);
      alert("✅ Your diet plan request has been submitted!");
      setFormData({
        name: "",
        email: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
        activityLevel: "",
        conditions: [],
        allergies: "",
        dietType: "",
        duration: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to Submit:", err);
    }
  };

  if (!plan) return <div className="p-10 text-red-500">Plan not found.</div>;

  return (
    <div className="px-4 md:px-8 py-12 max-w-5xl mx-auto mt-14">
      {/* Plan Info */}
      <div className="mb-10 mt-12">
        <img
          src={plan.image}
          alt={plan.title}
          className="rounded-2xl w-full h-64 object-cover mb-6 transform transition duration-500 hover:scale-105"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 text-center">{plan.title}</h2>
        <p className="text-gray-700 text-md md:text-lg text-center">{plan.description}</p>
      </div>

      {/* Request Form */}
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 bg-gradient-to-b from-green-50 via-white to-green-100">
        <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-6">
          Request This Diet Plan
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
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
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            >
              <option value="">Select Gender</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
          </div>

          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option value="">Select Activity Level</option>
            <option>Sedentary (little or no exercise)</option>
            <option>Lightly active (1–3 days/week)</option>
            <option>Moderately active (3–5 days/week)</option>
            <option>Very active (6–7 days/week)</option>
            <option>Super active (twice/day workouts)</option>
          </select>


          {/* Conditions */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Any health conditions?
            </label>
            <div className="flex flex-wrap gap-4">
              {["PCOS", "Diabetes", "Thyroid", "Blood Pressure"].map((cond) => (
                <label key={cond} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="conditions"
                    value={cond}
                    checked={formData.conditions.includes(cond)}
                    onChange={handleChange}
                  />
                  {cond}
                </label>
              ))}
            </div>
          </div>

          <input
            type="text"
            name="allergies"
            placeholder="Any allergies (comma-separated)"
            value={formData.allergies}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="dietType"
              value={formData.dietType}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            >
              <option value="">Select Diet Preference</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Vegan</option>
              <option>Gluten-Free</option>
              <option>No Preference</option>
            </select>

            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            >
              <option value="">Select Plan Duration</option>
              <option value="7 Days">7 Days</option>
              <option value="14 Days">14 Days</option>
              <option value="21 Days">21 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="Custom">Custom (Mention in message)</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Any specific goals or notes?"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            rows={4}
          />

          <button
            type="submit"
            className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanDetail;
