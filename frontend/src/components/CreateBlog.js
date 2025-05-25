import React, { useState } from "react";
import axios from "axios";

const CreateBlog = ({ onBlogCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/blogs",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      setContent("");
      onBlogCreated();
    } catch (err) {
      console.error("Failed to create blog:", err.response?.data || err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto my-6 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Create Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
        rows="5"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Post Blog
      </button>
    </form>
  );
};

export default CreateBlog;
