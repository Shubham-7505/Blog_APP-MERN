import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={
                <BlogList
                  blogs={blogs}
                  onDelete={handleDelete}
                  onUpdate={fetchBlogs}
                />
              }
            />
            <Route
              path="/create"
              element={<CreateBlog onBlogCreated={fetchBlogs} />}
            />
            <Route path="/about" element={<p className="text-lg">This is a blog app created using MERN stack.</p>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
