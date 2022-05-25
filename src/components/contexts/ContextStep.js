import React, { useState, useEffect, createContext } from "react";
const BlogContext = createContext();
function BlogProvider({ children }) {
  const [category, setCategory] = useState("");
  useEffect(() => {
        setData(data.data);
        
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
