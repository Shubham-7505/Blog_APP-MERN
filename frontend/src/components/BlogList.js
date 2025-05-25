import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BlogList = ({ blogs, onUpdate, user }) => {
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onUpdate();
    } catch (err) {
      console.error("Failed to delete blog:", err.response?.data || err);
    }
  };
  const getSnippet = (text) => {
    // Limit to 25 words
    const words = text.split(" ");
    if (words.length <= 25) return text;
    return words.slice(0, 20).join(" ") + "...";
  };
  return (
    <div className="max-w-3xl mx-auto mt-8">
      {blogs.map((blog) => (
        <Link to={`/blog/${blog._id}`}>
        <div key={blog._id} className="bg-white shadow p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold text-black-600">
              {blog.title}
          </h2>
          <p className="mt-2 text-gray-700">{getSnippet(blog.content)}</p>
          <p className="text-sm text-gray-500 mt-2">
            By: {blog.author || "Anonymous"} |{" "}
            {new Date(blog.createdAt).toLocaleString()}
          </p>
          {user && user.id === blog.user && (
            <div className="mt-4 flex gap-2">
              {/* You can add edit functionality later */}
              {/* <button className="px-3 py-1 bg-yellow-400 text-white rounded">Edit</button> */}
              <button
                onClick={() => handleDelete(blog._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
