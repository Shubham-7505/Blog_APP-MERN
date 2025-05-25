import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: "", content: "", author: "" });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5000/api/blogs`);
        const found = res.data.find((b) => b._id === id);
        if (found) setBlog(found);
        else navigate("/");
      } catch (err) {
        console.error("Failed to load blog:", err);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/blogs/edit/${id}`,
        blog,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/myblogs");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl mb-4 font-semibold">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full p-2 border rounded"
          value={blog.author}
          onChange={(e) => setBlog({ ...blog, author: e.target.value })}
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded h-40"
          value={blog.content}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
