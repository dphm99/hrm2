import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header/Header2";
import BlogContent from "./Content/BlogContent";

const Blog = () => {
  let w = window.innerWidth;
  const [header, setHeader] = useState(true);
  useEffect(() => {
    if (w <= 768) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, []);
  return (
    <>
      {!header && <Header />}
      {header && <Header2 />}
      <BlogContent />
      <Footer />
    </>
  );
};
export default Blog;
