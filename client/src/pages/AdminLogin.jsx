import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "laibey3211") {
      localStorage.setItem("isAdmin", "true");
      toast.success("Login Success");
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center bg-green-50 px-6"
    >
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Admin Login 🔐
        </h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 w-full rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </motion.div>
  );
};

export default AdminLogin;
