import React, { useEffect, useState } from "react";
import Header2 from "../../components/Header/Header2";
import Slogan from "../../components/Header/Slogan";
import Footer from "../../components/Footer/Footer";
import FormResearch from "../../components/FormResearch/FormResearch";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

function Research() {
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
      <Helmet>
        <title>Tra cứu kết quả ứng tuyển - Diligo</title>
        <meta name="description" content="Tra cứu kết quả ứng tuyển - Diligo" />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
      <Slogan/>
      <FormResearch />
      <Footer />
    </>
  );
}

export default Research;
