import React, {useState} from 'react';
import axios from 'axios';

const CreateBlog = ({onBlogCreated}) =>{
    const  [title, setTitle] = useState ('');
    const  [content, setContent] = useState ('');
    const  [author, setAuthor] = useState ('');
    const  [message, setMessage] = useState ('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const newBlog = {title, content, author };
            const res = await axios.post('http://localhost:5000/api/blogs', newBlog);
            if(res.status === 201){
                setMessage('Blog created successfully');
            }  
            setTitle('');
            setContent('');
            setAuthor('');
            onBlogCreated();
        }
        catch (error) {
            console.error("Error creating blog:", error);
            setMessage('Error creating blog');
        }
    };

    return (
        <div>
           <h2>Create New Blog</h2>
           <form onSubmit = {handleSubmit}>
             <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required
                style={{ display: 'block', margin: '10px 0' }}
                />
                <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                style={{ display: 'block', margin: '10px 0' }}
                />
                <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
    
                style={{ display: 'block', margin: '10px 0' }}
                />
                <button type="submit" style={{ display: 'block', margin: '10px 0' }}>
                    Create Blog
                </button>
           </form> 
        </div>
    )
};

export default CreateBlog;