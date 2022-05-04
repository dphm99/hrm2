import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/img/logo.png";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Footer() {
  return (
    <div className={styles.footerBox}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.logo}>
          <img src={logo} alt="" className={styles.logoImg} />
        </div>

        <div className={`${styles.list} row mt-5`}>
          <div className={`${styles.listItem} col-4`}>
            <div className={styles.footerTitle}>
              <h5>CÔNG TY CỔ PHẦN DILIGO HOLDINGS</h5>
            </div>
            <div className={styles.footerContent}>
              <ul>
                <li><a href=""><ArrowRightIcon/>Văn phòng miền Bắc</a></li>
                <li><a href=""><ArrowRightIcon/>Văn phòng miền Nam</a></li>
                <li><a href=""><ArrowRightIcon/>Nhà máy DILIGO HOLDINGS</a></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.listItem} col-3`}>
            <div className={styles.footerTitle}><h5>VỀ CÔNG TY</h5></div>
            <div className={styles.footerContent}>
              <ul>
                <li><a href=""><ArrowRightIcon/>Vị trí tuyển dụng</a></li>
                <li><a href=""><ArrowRightIcon/>Định hướng nghề nghiệp</a></li>
                <li><a href=""><ArrowRightIcon/>Đào tạo</a></li>
                <li><a href=""><ArrowRightIcon/>Về chúng tôi</a></li>
                <li><a href=""><ArrowRightIcon/>Diligo.vn</a></li>
                <li><a href=""><ArrowRightIcon/>Lipzo.com</a></li>
                <li><a href=""><ArrowRightIcon/>Nivahealthcare.com</a></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.listItem} col-3`}>
            <div className={styles.footerTitle}><h5>HỖ TRỢ</h5></div>
            <div className={styles.footerContent}>
              <ul>
                <li><a href=""><ArrowRightIcon/>Kiểm tra kết quả ứng tuyển</a></li>
                <li><a href=""><ArrowRightIcon/>Tìm việc gần bạn</a></li>
                <li><a href=""><ArrowRightIcon/>Câu hỏi thường gặp</a></li>
                <li><a href=""><ArrowRightIcon/>Quy trình tuyển dụng</a></li>
                <li><a href=""><ArrowRightIcon/>Dành cho nhân viên cũ</a></li>
                <li><a href=""><ArrowRightIcon/>Nhà phân phối sắp khai trương</a></li>
                <li><a href=""><ArrowRightIcon/>Siêu thị sắp khai trương</a></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.listItem} col-2`}>
            <div className={styles.footerTitle}><h5 style={{textAlign: "right"}}>FANPAGE TUYỂN DỤNG</h5></div>
            <div className={styles.footerContent}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
