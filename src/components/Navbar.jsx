import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current route for active link
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  return (
    <nav className="bg-gray-300 shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">MyBlog</Link>
      </div>

      {/* Navigation Links (Centered) */}
      <div className="hidden md:flex gap-6 flex-1 justify-center">
        <Link
          to="/"
          className={`text-lg font-medium ${
            location.pathname === "/" ? "text-blue-600 font-bold" : "text-gray-600"
          } hover:text-blue-500 transition-all`}
        >
          Blog List
        </Link>
        <Link
          to="/contact"
          className={`text-lg font-medium ${
            location.pathname === "/contact" ? "text-blue-600 font-bold" : "text-gray-600"
          } hover:text-blue-500 transition-all`}
        >
          Contact Us
        </Link>
      </div>

      {/* Login & Register (Right Side) */}
      <div className="hidden md:flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Register
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
          <Link
            to="/"
            className="py-2 text-lg text-gray-700 hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Blog List
          </Link>
          <Link
            to="/contact"
            className="py-2 text-lg text-gray-700 hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="py-2 text-lg text-blue-500 border-t border-gray-200 w-full text-center hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="py-2 text-lg text-white bg-blue-500 w-full text-center hover:bg-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
