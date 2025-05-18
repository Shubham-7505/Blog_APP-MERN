import React,  {useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = ({blogs, onDelete}) => {
    return (
        <div>
            <h2>All Blogs</h2>
            {blogs.map((blog)=>(
                <div key={blog._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <p><strong>Author:</strong> {blog.author}</p>
                    <p><strong>Date:</strong> {new Date(blog.createdAt).toLocaleDateString()}</p>
                    <button onClick = {()=>onDelete(blog._id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}>
                        Delete      
                    </button>
                </div>
            ))}
        </div>
    );
};
export default BlogList;