import React, { useEffect, useState } from "react";
import flowhiring from "../../assets/img/flowhiring.jpg";
import styles from "./FlowHiring.module.css";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function FlowHiring() {

  let w = window.innerWidth
  const [header,setHeader] = useState(true)
  useEffect(() => {
    if(w <= 768){
      setHeader(false)
    } else {
      setHeader(true)
    }
  },[])
  return (
    <>
      {!header && <Header />}
      {header && <Header2 />}
      <div className={`${styles.flowhiring} container`}>
        <img src={flowhiring} alt="Quy trình tuyển dụng" />
      </div>
      <Footer/>
    </>
  );
}

export default FlowHiring;
