import { useEffect, useState } from "react";

export const useFetchBlogs = (page) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await fetch(`http://localhost:3000/blogs?_page=${page}&_limit=6`);
      const newData = await res.json();
      setBlogs((prevData) => [...prevData, ...newData]);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    /* fetch("http://localhost:3000/blogs")
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching blogs");
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      }); example with promises*/
    getBlogs(); // example with async await
  }, [page]);

  return {
    blogs,
    setBlogs,
  };
};
