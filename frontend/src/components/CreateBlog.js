import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = ({ onBlogCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBlog = { title, content, author };
      const res = await axios.post('http://localhost:5000/api/blogs', newBlog);
      if (res.status === 201) {
        setMessage('✅ Blog created successfully!');
      }
      setTitle('');
      setContent('');
      setAuthor('');
      onBlogCreated();
    } catch (error) {
      console.error("Error creating blog:", error);
      setMessage('❌ Error creating blog');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create New Blog</h2>

      {message && (
        <div className="mb-4 text-sm text-green-600 font-medium">{message}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
