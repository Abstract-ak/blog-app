import React, { useEffect, useState } from "react";

const BlogForm = ({ currentBlog, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    if (currentBlog) setFormData(currentBlog);
  }, [currentBlog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />

      <button type="submit">{currentBlog ? "Update" : "Create"}</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default BlogForm;
