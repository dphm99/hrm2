import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logomau.png";
import fbIcon from "../../assets/svg/FacebookMini-Icon.svg"
import inIcon from "../../assets/svg/FacebookMini-Icon.svg"
import liIcon from "../../assets/svg/FacebookMini-Icon.svg"
import yoIcon from "../../assets/svg/FacebookMini-Icon.svg"
import zaIcon from "../../assets/svg/FacebookMini-Icon.svg"


function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topHeader}>
        <ul className={styles.icon}>
          <li><img src={fbIcon} alt="" /></li>
          <li><img src={inIcon} alt="" /></li>
          <li><img src={liIcon} alt="" /></li>
          <li><img src={yoIcon} alt="" /></li>
          <li><img src={zaIcon} alt="" /></li>
        </ul>
      </div>
      <div className={styles.headerBox}>
          <div className="container">
              <div className={`${styles.header} row`}>
                <a href="" className={`${styles.headerLogo} col-3`}>
                  <img src={logo} alt="" className={styles.logoImg}/>
                </a>
                <ul className={`${styles.headerMenu} col-9`}>
                  <li>TRANG CHỦ</li>
                  <li>VỊ TRÍ TUYỂN DỤNG</li>
                  <li>ĐỊNH HƯỚNG NGHỀ NGHIỆP</li>
                  <li>ĐÀO TẠO</li>
                  <li>TRỢ GIÚP</li>
                </ul>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Header;
