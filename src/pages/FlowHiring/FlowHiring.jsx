import React from "react";
import flowhiring from "../../assets/img/flowhiring.jpg";
import styles from "./FlowHiring.module.css";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";

function FlowHiring() {
  return (
    <>
      <Header2 />
      <div className={`${styles.flowhiring} container`}>
        <img src={flowhiring} alt="Quy trình tuyển dụng" />
      </div>
      <Footer/>
    </>
  );
}

export default FlowHiring;
