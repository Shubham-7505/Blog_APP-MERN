import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const MyBlogs = ({ user, onUpdate }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/blogs/my', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(res.data);
      } catch (error) {
        console.error('Failed to load your blogs:', error);
      }
    };

    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/blogs/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };
  
  const getSnippet = (text) => {
  // Limit to 25 words
  const words = text.split(' ');
  if (words.length <= 25) return text;
  return words.slice(0, 25).join(' ') + '...';
};
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl mb-4 font-semibold">My Blogs</h2>
      {blogs.map((blog) => (
        
        <div key={blog._id} className="border p-4 rounded mb-4">
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p className="text-sm text-gray-500">By {blog.author}</p>
          <p className="mt-2">{getSnippet(blog.content)}</p>
    
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => handleDelete(blog._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/edit/${blog._id}`)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              Edit
            </button>
            <button
              onClick={() => navigate(`/blog/${blog._id}`)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Read More
            </button>
            {/* Optional: Add an Edit button here later */}
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default MyBlogs;
