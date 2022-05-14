import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header/Header2";
import Banner from "./Banner/Banner";


function DetailsRecuit() {
  const [header,setHeader] = useState(true)
  useEffect(() => {
    if(window.innerWidth <= 768){
      setHeader(false)
    } else {
      setHeader(true)
    }
  },[])
  return (
    <>
     {!header && <Header />}
      {header && <Header2 />}
      <Banner />
      <Footer />
    </>
  );
}

export default DetailsRecuit;
