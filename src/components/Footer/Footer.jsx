import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <div className={styles.footerBox}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.logo}>
          <img src={logo} alt="" className={styles.logoImg} />
        </div>

        <div className={`${styles.list} row mt-5`}>
          <div className="col-5">
            <div className={styles.footerTitle}>
              CÔNG TY CỔ PHẦN DILIGO HOLDINGS
            </div>
            <div className={styles.footerContent}>
              <ul>
                <li>Văn phòng miền Bắc</li>
                <li>Văn phòng miền Nam</li>
                <li>Nhà máy DILIGO HOLDINGS</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className={styles.footerTitle}>VỀ CÔNG TY</div>
            <div className={styles.footerContent}>
              <ul>
                <li>Vị trí tuyển dụng</li>
                <li>Định hướng nghề nghiệp</li>
                <li>Đào tạo</li>
                <li>Về chúng tôi</li>
                <li>Diligo.vn</li>
                <li>Lipzo.com</li>
                <li>Nivahealthcare.com</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className={styles.footerTitle}>HỖ TRỢ</div>
            <div className={styles.footerContent}>
              <ul>
                <li>Kiểm tra kết quả ứng tuyển</li>
                <li>Tìm việc gần bạn</li>
                <li>Câu hỏi thường gặp</li>
                <li>Quy trình tuyển dụng</li>
                <li>Dành cho nhân viên cũ</li>
                <li>Nhà phân phối sắp khai trương</li>
                <li>Siêu thị sắp khai trương</li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className={styles.footerTitle}>FANPAGE TUYỂN DỤNG</div>
            <div className={styles.footerContent}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
