
import React, {useEffect, useState} from "react";
import axios from 'axios';
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";

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
    <div className="App">
      <h1>Blog App</h1>
      <CreateBlog onBlogCreated = {fetchBlogs}/>
      <hr />
      <BlogList blogs={blogs} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
