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
  const [width, setWidth] = useState("w-50");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setWidth("w-80");
      } else {
        setWidth("")
      }
    };
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${styles.FAQ} FAQs`}>
      <Header2 />
      <Breadcrumbs
        breadItem={breadcrumItem}

      />
      <div className="container">

        <p style={{
          fontSize: `32px `,
          textAlign: `center`,
          fontWeight: `700`,
          marginBottom: `90px`,
          marginTop: `80px`


        }}>"Xin chào! Anh (chị) đang cần trợ giúp điều gì"</p>
        <div className={`${styles.nav}`}>
          <div className={`${styles.navItem}`}>
            <p>
              Câu hỏi thường gặp
            </p>
          </div>
          <div className={`${styles.navItem}`}>
            <p>
              Trò chuyện với chúng tôi
            </p>
          </div>
        </div>
        {/* <div
        className={`w-100 d-flex justify-content-center align-items-center ${styles.cardBanner} cardBanner`}
      > */}
        {/* <Card
          title="Những câu hỏi thường gặp"
          icon={
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              stroke="#f47d20"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          }
        />
        <Card
          title="Chat với chúng tôi"
          icon={
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              stroke="#f47d20"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          }
        /> */}
        {/* </div> */}

        <div
          className={`container ${width} `}
          style={{ marginTop: "35px" }}>
          <h2
            style={{
              marginBottom: `45px`,
              textAlign: `center`,
              fontWeight: `700`,
            }}>
            Câu hỏi các ứng viên thường hay thắc mắc
          </h2>
          <Accordition />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
