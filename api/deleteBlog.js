export const deleteBlog = async (id) => {
    const settings = {
      method: "DELETE",
    };
    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`, settings);
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  };
  