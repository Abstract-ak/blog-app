import { useEffect, useState } from "react";

import "./style.css";
import { createBlog, deleteBlog, fetchBlogs, updateBlog } from "./api";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import Pagination from "./components/Pagination";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const loadBlogs = async () => {
    const { data } = await fetchBlogs(page, 5);
    console.log("fetch data", data);
    setBlogs(data.data);
    setPages(data.pages);
  };

  useEffect(() => {
    loadBlogs();
  }, [page]);

  const handleSubmit = async (blog) => {
    if (currentBlog) {
      await updateBlog(currentBlog._id, blog);
    } else {
      await createBlog(blog);
    }
    setCurrentBlog(null);
    loadBlogs();
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    loadBlogs();
  };

  return (
    <div className="app">
      <h1>Blog Management</h1>
      <BlogForm
        currentBlog={currentBlog}
        onSubmit={handleSubmit}
        onCancel={() => setCurrentBlog(null)}
      />
      <BlogList
        blogs={blogs}
        onEdit={(blog) => setCurrentBlog(blog)}
        onDelete={handleDelete}
      />
      <Pagination page={page} pages={pages} onPageChange={setPage} />
    </div>
  );
}

export default App;
