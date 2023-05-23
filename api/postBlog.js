export const postBlogToDbJson = async (blog) => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  };
  try {
    const response = await fetch(`http://localhost:3000/blogs`, settings);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};
