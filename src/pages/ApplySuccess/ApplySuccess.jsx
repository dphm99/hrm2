import React from "react";
import Footer from "../../components/Footer/Footer";
import Header2 from "../../components/Header/Header2";
import { Checkmark } from "react-checkmark";
import styles from "./Apply.module.css";

function ApplySuccess() {
  return (
    <>
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
