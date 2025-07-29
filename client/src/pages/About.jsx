import { Link } from "react-router-dom";
import nutritionistImg from "../assets/nutritionist.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} 
      className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden mt-6"
    >
      {/* Background Gradient + Blur */}
      <div className="bg-gradient-to-br from-mint via-cream to-palegreen backdrop-blur-lg" />


      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 mt-10">

        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={nutritionistImg}
            alt="Nutritionist"
            className="rounded-3xl shadow-2xl w-full object-cover transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-playfair font-bold text-green-700 mb-4">
            Meet Your Nutrition Coach
          </h2>

          <p className="text-gray-700 text-lg font-poppins mb-4 leading-relaxed">
            Hi! I'm <span className="text-green-600 font-semibold">Laiba</span>, a certified nutritionist and wellness guide. I've helped 200+ people balance hormones, lose stubborn fat, gain energy, and fall in love with real food.
          </p>

          <p className="text-gray-700 text-lg font-poppins mb-4 leading-relaxed">
            My journey began with my own struggles with PCOS and fatigue. Now I design simple, effective diet plans that actually work — no crash diets, just smart food choices.
          </p>

          <p className="text-gray-700 text-lg font-poppins leading-relaxed">
            Ready to transform your health? Let’s begin your journey together.
          </p>

          <Link
            to="/plans"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition-all font-semibold font-poppins"
          >
            View Diet Plans
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
