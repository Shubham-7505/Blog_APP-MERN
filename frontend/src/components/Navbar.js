import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          <Link to="/">MyBlog</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/create" className="hover:text-blue-200">Create Blog</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
