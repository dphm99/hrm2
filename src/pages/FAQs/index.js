import React, { useEffect, useState } from "react";
import styles from "./FAQ.module.css";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import Accordition from "./Accordion/Accordion";
// import Card from "./Card";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import "./custom.scss";

function Index() {
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/hoi-dap",
      title: "Hỏi đáp",
      isActive: true,
    },
  ];

  return (
    <div className={`${styles.FAQ} FAQs`}>
      <Header2 />
      <Breadcrumbs
        breadItem={breadcrumItem}
      />
      <div className="container-md">

        <p className={`${styles.greeting}`}

        >
          "Xin chào! Anh (chị) đang cần trợ giúp điều gì"</p>
        <div className={`${styles.nav}`}>
          <div className={`${styles.navItem} ${styles.active} `}>
            Câu hỏi thường gặp
          </div>
          <div className={`${styles.navItem}`}>
            Trò chuyện với chúng tôi
          </div>
        </div>

        <div
          className={`container-md `}
          style={{ marginTop: "35px" }}>
          <p
            className={`${styles.title}`}
          >
            Câu hỏi các ứng viên thường hay thắc mắc
          </p>
          <Accordition />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
