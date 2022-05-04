import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logomau.png";
// import fbIcon from "../../assets/svg/FacebookMini Icon.svg";
// import inIcon from "../../assets/svg/InstagramMini Icon.svg";
// import liIcon from "../../assets/svg/linkedin.svg";
// import yoIcon from "../../assets/svg/YoutubeMini Icon.svg";
// import zaIcon from "../../assets/svg/ZaloMini Icon.svg";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topHeader}>
        <ul className={styles.icon}>
          {/* <li><img src={fbIcon} alt="" /></li>
          <li><img src={inIcon} alt="" /></li>
          <li><img src={liIcon} alt="" /></li>
          <li><img src={yoIcon} alt="" /></li>
          <li><img src={zaIcon} alt="" /></li> */}

          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
        </ul>
      </div>
      <div className={styles.headerBox}>
        <div className="container">
          <div className={`${styles.header} row`}>
            <a href="/" className={`${styles.headerLogo} col-3`}>
              <img src={logo} alt="" className={styles.logoImg}/>
            </a>
            <div className={"col-9"}>
              <ul className={`${styles.headerMenu}`}  style={{paddingRight:"10px!important"}}>
                <li>
                  <a href="/">TRANG CHỦ</a>
                </li>
                <li>
                  <a href="/vi-tri-tuyen-dung">VỊ TRÍ TUYỂN DỤNG</a>
                </li>
                <li>
                  <a href="/">ĐỊNH HƯỚNG NGHỀ NGHIỆP</a>
                </li>
                <li>
                  <a href="/">ĐÀO TẠO</a>
                </li>
                <li>
                  <a href="/">TRỢ GIÚP</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
