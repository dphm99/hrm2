import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topHeader}></div>
      <div className={styles.headerBox}>
          <div className="container">
              <div className={`${styles.header} row`}>
                <a href="" className={`${styles.headerLogo} col-3`}>
                  <img src="" alt="" />
                  img1
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
