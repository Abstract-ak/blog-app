const Blog = require("../models/Blog");

// @desc    Get all blogs with pagination
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  /*  Extract the page & limit query parameter from the request URL.
        page determines which page of results to fetch.
        limit specifies the maximum number of blog posts per page.
      
      Default values are set.
  */

  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    /*  Blog.find(): Fetches all blog documents from the Blog collection in MongoDB.
        .sort({ createdAt: -1 }): Sorts blogs in descending order based on the createdAt field (newest blogs appear first).
        .skip((page - 1) * limit):
        Skips the first (page - 1) * limit blogs.
            For example:
            Page 1: Skips (1 - 1) * 10 = 0 blogs (starts at the first blog).
            Page 2: Skips (2 - 1) * 10 = 10 blogs (starts at the 11th blog).

        .limit(parseInt(limit)):
        Limits the number of blogs fetched to the limit value.
        parseInt ensures the limit is treated as an integer.
    */
    const total = await Blog.countDocuments();
    /*  Counts the total number of blog documents in the collection.
        This is used to calculate the total number of pages.
    */
    res.status(200).json({
      success: true,
      data: blogs,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Public
const createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({
      success: false,
      message: "All field are required",
    });
  }

  try {
    const blog = await Blog.create({ title, content, author });
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Public
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.author = author || blog.author;

    const updateBlog = await blog.save();
    res.status(200).json({ success: true, data: updateBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  // console.log("delete id", id);

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    // await blog.remove();
    // Delete the blog
    const result = await Blog.deleteOne({ _id: id });
    console.log("Delete Result:", result);

    if (result.deletedCount === 0) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to delete blog" });
    }
    res.status(200).json({ success: true, message: "Blog Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getBlogs, createBlog, updateBlog, deleteBlog };
