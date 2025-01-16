import axios from "axios";

//  Create an instance for axios.
const API = axios.create({ baseURL: "http://localhost:5000/api/blogs" });

// Fetch blogs with pagination
export const fetchBlogs = (page, limit) =>
  API.get(`?page=${page}&limit=${limit}`);

// Add a new blog
export const createBlog = (blogData) => API.post("/", blogData);

// Update an existing blog
export const updateBlog = (id, blogData) => API.put(`/${id}`, blogData);

// Delete a blog
export const deleteBlog = (id) => API.delete(`/${id}`);
