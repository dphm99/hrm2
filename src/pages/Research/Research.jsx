import React, { useEffect, useState } from "react";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import FormResearch from "../../components/FormResearch/FormResearch";
import Header from "../../components/Header/Header";
function Research() {
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
      <FormResearch />
      <Footer />
    </>
  );
}

export default Research;
