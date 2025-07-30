import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div className="p-10 text-red-500">Blog not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-xl w-full h-64 object-cover mb-10 mt-14 transform transition duration-500 hover:scale-105"
      />
      <h2 className="text-3xl font-bold text-green-700 mb-4">{blog.title}</h2>
      <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
        {blog.content || "This is a placeholder for full blog content."}
      </p>
    </motion.div>
  );
};

export default BlogDetail;
