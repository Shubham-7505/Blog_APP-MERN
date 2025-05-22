import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `hover:underline ${
      location.pathname === path ? "font-semibold underline" : ""
    }`;

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">BlogApp</Link>
        </div>
        <div className="space-x-6 text-lg">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/create" className={linkClass("/create")}>
            Create Blog
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
