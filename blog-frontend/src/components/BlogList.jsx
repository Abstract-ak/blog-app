import React from "react";

const BlogList = ({ blogs, onEdit, onDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-item">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>
            <strong>Author:</strong>
            {blog.author}
          </p>
          <button onClick={() => onEdit(blog)}>Edit</button>
          <button onClick={() => onDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
