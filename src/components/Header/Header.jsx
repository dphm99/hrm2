import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logomau.png";
import facebook from "../../assets/img/icon-svg/facebook.svg";
import instagram from "../../assets/img/icon-svg/instagram.svg";
import linkedin from "../../assets/img/icon-svg/linkedin.svg"
import youtube from "../../assets/img/icon-svg/youtube.svg";
import zalo from "../../assets/img/icon-svg/zalo.svg"


function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topHeader}>
        <ul className={`${styles.icon} container`}>
          <li><img src={facebook} className={styles.iconSVG} alt="" /></li>
          <li><img src={instagram} className={styles.iconSVG} alt="" /></li>
          <li><img src={linkedin} className={styles.iconSVG} alt="" /></li>
          <li><img src={youtube} className={styles.iconSVG} alt="" /></li>
          <li><img src={zalo} className={styles.iconSVG} alt="" /></li>
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
