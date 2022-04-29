import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerBox}>
      <div className={`container`}>
        <div className={styles.logo}></div>

        <div className={`${styles.list} row mt-5`}>
          <div className="col-5">
            <div className={styles.footerTitle}>CÔNG TY CỔ PHẦN DILIGO HOLDINGS</div>
            <div className={styles.footerContent}></div>
          </div>
          <div className="col-2">
            <div className={styles.footerTitle}>VỀ CÔNG TY</div>
            <div className={styles.footerContent}></div>
          </div>
          <div className="col-2">
            <div className={styles.footerTitle}>HỖ TRỢ</div>
            <div className={styles.footerContent}></div>
          </div>
          <div className="col-3">
            <div className={styles.footerTitle}>FANPAGE TUYỂN DỤNG</div>
            <div className={styles.footerContent}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
