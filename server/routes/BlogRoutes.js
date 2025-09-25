import express from 'express';
import mongoose from 'mongoose';
import Blog from '../models/models.js';

const BlogRoute = express.Router();

// POST: Add a new blog
BlogRoute.post('/', async (req, res) => {
  try {
    const blogInfo = req.body;

    // Create a new blog document
    const newBlog = new Blog({
      heading: blogInfo.heading,
      subHeading: blogInfo.subHeading,
      img: blogInfo.img,
      keyHighlights: blogInfo.keyHighlights,
      category:blogInfo.category,
      blogContent: blogInfo.blogContent,
      moreDetails: blogInfo.moreDetails,
      summary: blogInfo.summary,
      conclusion: blogInfo.conclusion
    });

    // Save to MongoDB
    const savedBlog = await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: savedBlog
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message
    });
  }
});

// count
BlogRoute.get('/count', async (req, res) => {
  const totalBlogs = await Blog.countDocuments();
  res.json({ totalBlogs });
});

// GET: Fetch all blogs
BlogRoute.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.status(200).json({
      success: true,
      data: blogs
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
      error: error.message
    });
  }
});

// GET a single blog by id
BlogRoute.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const blog = await Blog.findById(id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    res.status(200).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching blog', error: err.message });
  }
});

// DELETE /api/blog/:id
BlogRoute.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Blog.findByIdAndDelete(id)

    if(!deleted) return res.status(404).json({ success: false, message: "Blog not found" })

    res.status(200).json({ success: true, message: "Blog deleted successfully" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: "Server error" })
  }
})


export default BlogRoute;
