import { useState } from "react";
import { postBlogToDbJson } from "../../../api/postBlog";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./AddBlog.css"

function AddBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [summary, setSummary] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    postBlogToDbJson({ id: uuid(), title, author, date, summary });
    navigate("/");
  };

  return (
    <form className="add-blog-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        placeholder="write a title"
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        value={author}
        placeholder="write an author"
        onChange={(event) => setAuthor(event.target.value)}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        value={summary}
        placeholder="write a summary"
        onChange={(event) => setSummary(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddBlog;
