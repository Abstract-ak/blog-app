import { useEffect, useState } from "react";

import "./style.css";
import { fetchBlogs } from "./api";
import BlogList from "./components/BlogList";

function App() {
  const [blogs, setBlogs] = useState([]);
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

  return (
    <div className="app">
      <h1>Blog Management</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
