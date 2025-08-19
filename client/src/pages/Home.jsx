import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mt-16">
        
        {/* Girlfriend Picture */}
        <div className="mb-4 mt-10 mr-2 flex items-center justify-center ">
          <img
            src="/girl.jpeg"
            alt="Laiba"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <p className="text-sm text-center md:text-base tracking-wider text-green-300 mb-2">
        Welcome to NutriCare
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold mb-3 text-center leading-snug font-playfair">
          Nourish Your Body,<br className="hidden sm:block" />
          Transform Your Life
        </h1>

        <p className="text-sm text-center md:text-lg text-gray-200 font-poppins mb-8 leading-relaxed">
          Personalized nutrition plans crafted to boost energy, balance hormones, and support healthy weight — naturally.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/plans"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg transition-all"
          >
            Explore Diet Plans
          </Link>
          <Link
            to="/book"
            className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full text-base font-semibold transition-all"
          >
            Book Consultation
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-sm text-gray-400 italic pb-4">
          Powered by <span className="text-orange-400 font-semibold">NutriCare by Laiba</span>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
