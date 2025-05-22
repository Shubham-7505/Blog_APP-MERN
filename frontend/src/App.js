
import React, {useEffect, useState} from "react";
import axios from 'axios';
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import Navbar from "./components/Navbar";


function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () =>{
    try {
      const res = await axios.get('http://localhost:5000/api/blogs');
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
  <div className="App bg-gray-50 min-h-screen">
    <Navbar />
    <div className="max-w-4xl mx-auto p-4">
      <CreateBlog onBlogCreated={fetchBlogs} />
      <hr className="my-6 border-gray-300" />
      <BlogList blogs={blogs} onDelete={handleDelete} onUpdate={fetchBlogs} />
    </div>
  </div>
);
};

export default App;
