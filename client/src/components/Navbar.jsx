import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Plans", to: "/plans" },
    { name: "Blog", to: "/blog" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] z-50 bg-black bg-opacity-60 backdrop-blur-sm  text-white rounded-xl shadow-md  py-1">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold hover:scale-105 transition duration-500">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2 text-cream" />
          Nutri <span className="text-orange-400">Care</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-medium hover:text-orange-400 transition ${
                  isActive ? "text-orange-400" : "text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Special Button */}
          <Link
            to="/book"
            className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-orange-400 hover:text-white transition flex items-center"
          >
            Appointment <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-center font-medium hover:text-orange-400 ${
                  isActive ? "text-orange-400" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/book"
            className="block mt-4 text-center bg-white text-black px-4 py-2 rounded-full shadow hover:bg-orange-400 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Appointment →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
