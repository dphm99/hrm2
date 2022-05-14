import React, { useEffect, useState } from "react";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import JobRecruits from "../../components/JobRecruit/JobRecruit";
import Header from "../../components/Header/Header";
function JobRecruit() {
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
      <JobRecruits />
      <Footer />
    </>
  );
}

export default JobRecruit;
