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
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
        >
          {editingId === blog._id ? (
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="content"
                value={editData.content}
                onChange={handleChange}
                placeholder="Content"
                required
                className="w-full p-2 border border-gray-300 rounded h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="author"
                value={editData.author}
                onChange={handleChange}
                placeholder="Author"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Update Blog
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-2">{blog.content}</p>
              <p className="text-sm text-gray-500">
                <strong>Author:</strong> {blog.author}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Date:</strong> {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => onDelete(blog._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => startEditing(blog)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
