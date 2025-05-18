const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Create a new blog post
router.post('/', async (req, res)=>{
 try{
    const {title, content, author, createdAt}=req.body;
    const newBlog = new Blog({title, content, author})
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
 }catch(err){
    console.error(err);
    res.status(500).json({ error:"Faoled to create blog post" });
 }
});

// Get all blog posts
router.get('/', async (req, res)=>{
    try{
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    }catch(err){
        res.status(500).json({ error: "Failed to fetch blog posts" });
    }
});

router.delete('/:id', async (req, res) =>{
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if(!deletedBlog){
            return res.status(404).json({ error: "Blog post not found" });
        }
        res.status(200).json({ message: "Blog post deleted successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete blog post" });
    }
});

module.exports = router;
