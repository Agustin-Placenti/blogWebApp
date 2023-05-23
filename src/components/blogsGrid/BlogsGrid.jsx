import { deleteBlog } from "../../../api/deleteBlog";
import "./BlogsGrid.css";

function BlogsGrid({ blog, updateTable, blogs }) {
  const handleDelete = () => {
    let newBlogs = blogs;
    try {
      deleteBlog(blog.id);
      newBlogs = newBlogs.filter((newBlog) => newBlog.id !== blog.id);
      updateTable(newBlogs);
    } catch (e) {
      return alert(e);
    }
  };

  return (
    <div className="blog-grid-item">
      <div className="blog-header">
        <div className="blog-title">{blog.title}</div>
        <button className="delete-card-button" onClick={() => handleDelete()}>
          X
        </button>
      </div>
      <div className="blog-author">{blog.author}</div>
      <div className="blog-date">{blog.date}</div>
      <div className="blog-summary">{blog.summary}</div>
    </div>
  );
}

export default BlogsGrid;
