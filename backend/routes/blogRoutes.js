const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const authMiddleware = require('../middleware/auth');

// Create a new blog post (only for logged-in users)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const newBlog = new Blog({
      title,
      content,
      author,
      user: req.user.id, // associate blog with logged-in user
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create blog post" });
  }
});

// Get all blog posts (public route)
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate('user', 'email'); // optionally show user email
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
});
router.get('/my', authMiddleware, async (req, res) => {
  try {
    const userBlogs = await Blog.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(userBlogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch your blogs' });
  }
});
// Delete a blog post (only if user owns the blog)
router.delete('/delete/:id', authMiddleware, async (req, res) => {
  try {
    console.log('🗑️ Deleting blog with ID:', req.params.id);
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      console.log('❌ Blog not found');
      return res.status(404).json({ error: "Blog post not found" });
    }

    console.log('✅ Blog found. Checking authorization...');
    console.log('Blog user:', blog.user.toString(), '| Requesting user:', req.user.id);

    if (blog.user.toString() !== req.user.id) {
      console.log('❌ Not authorized');
      return res.status(403).json({ error: "Not authorized to delete this blog" });
    }

    await blog.deleteOne(); // ✅ Use deleteOne instead of remove
    console.log('✅ Blog deleted');
    res.status(200).json({ message: "Blog post deleted successfully" });
    
  } catch (err) {
    console.error('🔥 Error deleting blog:', err);
    res.status(500).json({ error: "Failed to delete blog post" });
  }
});

router.get('/one/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('user', 'username');
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.error('🔥 Error fetching blog:', err);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});


// Update a blog post (only if user owns the blog)
router.put('/edit/:id', authMiddleware, async (req, res) => {
  try {
    console.log('🛠 Updating blog:', req.params.id);
    console.log('Request body:', req.body);
    console.log('User:', req.user.id);
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    if (blog.user.toString() !== req.user.id) {
      return res.status(403).json({ error: "Not authorized to update this blog" });
    }

    const { title, content, author } = req.body;

    blog.title = title;
    blog.content = content;
    blog.author = author;
    const updatedBlog = await blog.save();

    res.status(200).json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update blog post" });
  }
});


module.exports = router;
