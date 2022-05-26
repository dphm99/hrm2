import React, { useEffect, useState } from "react";
import flowhiring from "../../assets/img/flowhiring.jpg";
import styles from "./FlowHiring.module.css";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

function FlowHiring() {
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
        <title>Trợ giúp - Diligo</title>
        <meta name="description" content="Quy trình tuyển dụng - Diligo" />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
      <div className={`${styles.flowhiring} container`}>
        <img src={flowhiring} alt="Quy trình tuyển dụng" />
      </div>
    </>
  );
}

export default FlowHiring;
