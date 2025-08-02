import {
  Phone,
  Mail,
  MessageSquareText,
  MapPin,
  Clock3,
  Ban,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-60 text-gray-300 pt-14 pb-10 px-8 shadow-[0_-5px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl  border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4">NutriCare</h3>
          <p className="leading-relaxed">
            Helping you heal from within. Personalized diet plans and consultations by certified nutritionist Laiba.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-green-300 font-semibold mb-3">Contact</h4>
          <p className="flex items-center gap-2 mb-1"><Phone size={16} /> <span className="text-white">+92 300 1234567</span></p>
          <p className="flex items-center gap-2 mb-1"><Mail size={16} /> <span className="text-white">laibatahir.nutritionist@gmail.com</span></p>
          <p className="flex items-center gap-2"><MessageSquareText size={16} /> <span className="text-white">WhatsApp: +92 300 7654321</span></p>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-green-300 font-semibold mb-3">Where to Find Us</h4>
          <p className="flex items-center gap-2 mb-1"><MapPin size={16} /> Hostel City, Islamabad</p>
          <p className="flex items-center gap-2 mb-1"><MapPin size={16} /> Royal Girls Hostel Branch 9, Islamabad</p>
          <Link to="/admin"><p className="text-white mt-1">🌐 Online Consultations Available</p></Link>
        </div>

        {/* Talking Hours */}
        <div>
          <h4 className="text-green-300 font-semibold mb-3">Talking Hours</h4>
          <p className="flex items-center gap-2 mb-1"><Clock3 size={16} /> Mon–Fri: <span className="text-white">12:00 PM – 9:00 PM</span></p>
          <p className="flex items-center gap-2 mb-1"><Clock3 size={16} /> Sat: <span className="text-white">12:00 PM – 5:00 PM</span></p>
          <p className="flex items-center gap-2 text-red-400"><Ban size={16} /> Sun: Closed</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} <span className="text-white font-semibold">NutriCare by Laiba</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
