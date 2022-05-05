import React from "react";
import styles from "./Header2.module.css";
import logo from "../../assets/img/logo.png";

const Header2 = () => {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <div className={styles.Header2}>
          <div className={styles.headerBox}>
            <div className="container">
              <div className={`${styles.header} row`}>
                <a href="/" className={`${styles.headerLogo} col-3`}>
                  <img src={logo} alt="" className={styles.logoImg} />
                </a>
                <ul className={`${styles.headerMenu} col-9`}>
                  <li>
                    <a className={styles.headerMenuA} href="/">TRANG CHỦ</a>
                  </li>
                  <li>
                    <a href="/">VỊ TRÍ TUYỂN DỤNG</a>
                  </li>
                  <li>
                    <a className={styles.headerMenuA} href="/">ĐỊNH HƯỚNG NGHỀ NGHIỆP</a>
                  </li>
                  <li>
                    <a className={styles.headerMenuA} href="/">ĐÀO TẠO</a>
                  </li>
                  <li>
                    <a className={styles.headerMenuA} href="/">TRỢ GIÚP</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Header3}>
        <div className="">
           <div className={styles.Header3_name}>
           <p className={styles.header3_p}>TUYỂN DỤNG NHÂN SỰ KINH DOANH TOÀN QUỐC TẠI CÁC KÊNH GT, MT , HIỆU THUỐC , CHÀO THẦU ... LÊN TỚI <a className={styles.header3_a}>500</a> NGƯỜI </p>
           </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Header2;
