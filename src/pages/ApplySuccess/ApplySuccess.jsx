import React from "react";
import Footer from "../../components/Footer/Footer";
import Header2 from "../../components/Header/Header2";
import { Checkmark } from "react-checkmark";
import Helmet from "react-helmet";
// import styles from "./Apply.module.css";

function ApplySuccess() {
  return (
    <>
    <Helmet>
      <title>Ứng tuyển thành công</title>
      <meta
          name="description"
          content="Ứng tuyển thành công"
        />
    </Helmet>
      <Header2 />
      <div style={{ margin: "5rem 0" }}>
        <Checkmark size={"240"} color={"#bf202e"} />
        <h3 style={{ marginTop: "12rem", textAlign: "center" }}>
          Chúc mừng bạn đã ứng tuyển thành công
        </h3>
      </div>

      <Footer />
    </>
  );
}

export default ApplySuccess;
