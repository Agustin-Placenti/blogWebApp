import { useFetchBlogs } from "../../../api/useFetchBlogs";
import BlogsGrid from "../../components/blogsGrid/BlogsGrid";
import { useState } from "react";
import "./BlogDashboard.css";

function BlogDashboard() {
  const [page, setPage] = useState(1);
  const { blogs, setBlogs } = useFetchBlogs(page);

  const handleScroll = () => {
    setPage(page + 1);
  };

  const updateTable = (newBlogs) => {
    setBlogs(newBlogs);
  };

  return (
    <>
      <div className="blog-grid-container">
        {blogs && blogs.map((blog) => {
          return (
            <BlogsGrid key={blog.id} blog={blog} updateTable={updateTable} blogs={blogs} />
          );
        })}
      </div>
      <div className="button-container">
        <button className="see-more-button" onClick={handleScroll}>
          See more
        </button>
      </div>
    </>
  );
}

export default BlogDashboard;
