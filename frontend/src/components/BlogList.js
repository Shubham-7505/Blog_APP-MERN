import React, { useState } from 'react';
import axios from 'axios';

const BlogList = ({ blogs, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: '', content: '', author: '' });

  const startEditing = (blog) => {
    setEditingId(blog._id);
    setEditData({ title: blog.title, content: blog.content, author: blog.author });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blogs/${editingId}`, editData);
      setEditingId(null);
      setEditData({ title: '', content: '', author: '' });
      onUpdate();
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          {editingId === blog._id ? (
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                placeholder="Title"
                required
                style={{ display: 'block', margin: '10px 0' }}
              />
              <textarea
                name="content"
                value={editData.content}
                onChange={handleChange}
                placeholder="Content"
                required
                style={{ display: 'block', margin: '10px 0' }}
              />
              <input
                type="text"
                name="author"
                value={editData.author}
                onChange={handleChange}
                placeholder="Author"
                required
                style={{ display: 'block', margin: '10px 0' }}
              />
              <button type="submit" style={{ marginRight: '10px' }}>Update Blog</button>
              <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
            </form>
          ) : (
            <>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p><strong>Author:</strong> {blog.author}</p>
              <p><strong>Date:</strong> {new Date(blog.createdAt).toLocaleDateString()}</p>
              <button
                onClick={() => onDelete(blog._id)}
                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', marginRight: '10px' }}
              >
                Delete
              </button>
              <button
                onClick={() => startEditing(blog)}
                style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 10px' }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
