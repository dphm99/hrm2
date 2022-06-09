import React, { useState, useEffect, createContext } from "react";
import axios from 'axios'
const BlogContext = createContext();
function BlogProvider({ children }) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    axios.get("http://hrm.diligo.vn/api/v1/blog")
      .then((result) => result.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  const value = {
    data,
    category,
    setCategory,
  };

  return (
    <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
  );
}
export { BlogProvider, BlogContext };
