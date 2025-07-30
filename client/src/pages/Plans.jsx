import { Link } from "react-router-dom";
import plans from "../data/plans";
import { motion } from "framer-motion";

const Plans = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen px-4 py-16 bg-gradient-to-b from-green-50 via-white to-green-100"
    >
      <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-center text-green-700 mb-8 mt-14">
        Explore Our Diet Plans <span className="text-2xl">🥗</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-56 object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2 font-playfair">
                {plan.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 font-poppins leading-relaxed">
                {plan.description}
              </p>
              <Link
                to={`/plans/${plan.id}`}
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow transition"
              >
                View Plan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Plans;
