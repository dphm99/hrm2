import React, { useEffect, useState } from "react";
import styles from "./FAQ.module.css";
import Header2 from "../../components/Header/Header2";
import Slogan from "../../components/Header/Slogan";
import Footer from "../../components/Footer/Footer";
import Accordition from "./Accordion/Accordion";
// import Card from "./Card";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import "./custom.scss";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

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
        <meta name="description" content="Trợ giúp" />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
      <Slogan/>
      <div className={`${styles.FAQ} FAQs`}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className="container-md">
          <p className={`${styles.greeting}`}>
            "Xin chào! Anh (chị) đang cần trợ giúp điều gì"
          </p>
          <div className={`${styles.nav}`}>
            <div className={`${styles.navItem} ${styles.active} `}>
              Câu hỏi thường gặp
            </div>
            <div className={`${styles.navItem}`}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#bf202e",
                  fontWeight: "600",
                }}
                href="https://www.facebook.com/tuyendungdiligo"
              >
                Trò chuyện với chúng tôi
              </a>
            </div>
          </div>

          <div className={`container-md `} style={{ marginTop: "35px" }}>
            <p className={`${styles.title}`}>
              Câu hỏi các ứng viên thường hay thắc mắc
            </p>
            <Accordition />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
