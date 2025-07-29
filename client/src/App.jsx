import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import PlanDetail from "./pages/PlanDetail";
import Book from "./pages/Book";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      
      <div className="min-h-[80vh]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plan/:id" element={<PlanDetail />} />
            <Route path="/book" element={<Book />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
 
      <Footer />
    </>
  );
};

export default App;
