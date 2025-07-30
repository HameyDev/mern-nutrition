import testimonials from "../data/testimonials";
import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // optional: install if not used already

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-b from-green-100 via-white to-green-50 px-4 py-20"
    >
      <h2 className="text-4xl font-extrabold text-green-700 text-center mb-8 mt-14 font-playfair">
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-6 flex flex-col items-center text-center border border-green-100 transition-all"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-white shadow-md"
            />

            {/* Optional Quote Icon */}
            <Quote className="text-green-400 mb-3 opacity-70" size={32} />

            <p className="text-gray-700 italic mb-4 leading-relaxed">
              “{t.message}”
            </p>
            <h4 className="font-semibold text-green-800 text-lg">{t.name}</h4>

            {/* Star Rating */}
            <div className="flex justify-center mt-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-yellow-400 text-lg"
                >
                  ★
                </motion.span>
              ))}
              {Array.from({ length: 5 - t.rating }).map((_, i) => (
                <span key={i} className="text-gray-300 text-lg">★</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
