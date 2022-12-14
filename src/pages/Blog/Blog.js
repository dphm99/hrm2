import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header/Header2";
import BlogContent from "./Content/BlogContent";
import Slogan from "../../components/Header/Slogan";

const Blog = () => {
  const [header, setHeader] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, []);
  return (
    <>
      {!header && <Header />}
      {header && <Header2 />}
      <Slogan/>
      <BlogContent />
      <Footer />
    </>
  );
};
export default Blog;
