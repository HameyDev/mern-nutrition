import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [dietRequests, setDietRequests] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/admin-login";
  };


  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/admin-login");
    }
    const fetchData = async () => {
      try {
        const [dietRes, consultRes] = await Promise.all([
          axios.get("https://nutrition-backend-4wj5.onrender.com/api/diet/"),
          axios.get("https://nutrition-backend-4wj5.onrender.com/api/consultation/"),
        ]);
        setDietRequests(dietRes.data);
        setConsultations(consultRes.data);
      } catch (err) {
        console.error("Error fetching admin data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen px-6 py-16 bg-gray-50"
    >
      <h2 className="text-4xl font-bold text-green-700 mb-10 text-center mt-14">
        Admin Dashboard 🛠️
      </h2>

      {/* Diet Requests */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">
          Diet Plan Requests ({dietRequests.length})
        </h3>
        <div className="overflow-auto max-h-[400px] bg-white rounded-xl shadow p-4 text-sm">
          <table className="w-full border">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Gender</th>
                <th className="p-2 border">Weight</th>
                <th className="p-2 border">Height</th>
                <th className="p-2 border">Activity Level</th>
                <th className="p-2 border">Conditions</th>
                <th className="p-2 border">Allergies</th>
                <th className="p-2 border">Diet Preference</th>
                <th className="p-2 border">Plan Duration</th>
                <th className="p-2 border">Any Specific Goal</th>
                <th className="p-2 border">Plan Type</th>
                <th className="p-2 border">Request Creation Date</th>
              </tr>
            </thead>
            <tbody>
              {dietRequests.map((item, i) => (
                <tr key={i}>
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 border">{item.age}</td>
                  <td className="p-2 border">{item.gender}</td>
                  <td className="p-2 border">{item.weight}</td>
                  <td className="p-2 border">{item.height}</td>
                  <td className="p-2 border">{item.activityLevel}</td>
                  <td className="p-2 border">
                    {item.conditions?.join(", ") || "None"}
                  </td>
                  <td className="p-2 border">{item.allergies}</td>
                  <td className="p-2 border">{item.dietType}</td>
                  <td className="p-2 border">{item.duration}</td>
                  <td className="p-2 border">{item.message}</td>
                  <td className="p-2 border">{item.planId}</td>
                  <td className="p-2 border">{(item.createdAt).slice(0,10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Consultations */}
      <section>
        <h3 className="text-2xl font-semibold text-green-600 mb-4">
          Booked Consultations ({consultations.length})
        </h3>
        <div className="overflow-auto max-h-[400px] bg-white rounded-xl shadow p-4 text-sm">
          <table className="w-full border">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Time</th>
                <th className="p-2 border">Issue</th>
                <th className="p-2 border">Message</th>
                <th className="p-2 border">Request Creation Date</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((item, i) => (
                <tr key={i}>
                  <td className="p-2 border text-center">{item.name}</td>
                  <td className="p-2 border text-center">{item.email}</td>
                  <td className="p-2 border text-center">{item.age}</td>
                  <td className="p-2 border text-center">{item.date}</td>
                  <td className="p-2 border text-center">{item.time}</td>
                  <td className="p-2 border text-center">{item.issue}</td>
                  <td className="p-2 border text-center">{item.message}</td>
                  <td className="p-2 border text-center">{(item.createdAt).slice(0,10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-right mb-6 mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default AdminDashboard;
