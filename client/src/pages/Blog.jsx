import blogs from "../data/blogs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-white px-6 py-16 bg-gradient-to-b from-green-50 via-white to-green-100"
    >
      <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-green-700 text-center mb-8 mt-14">
        Nutrition Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{blog.snippet}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-green-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;
