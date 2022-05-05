/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/img/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
                <li>
                  <h6>
                    <LocationOnIcon />
                    Văn phòng miền Bắc
                  </h6>
                  <p>
                    Tầng 2, Tòa nhà N03T5, khu Đoàn ngoại giao, phường Xuân Tảo,
                    quận Bắc Từ Liêm, Hà Nội, VN
                  </p>
                  <a href="">Xem bản đồ</a>
                </li>
                <li>
                  <h6>
                    <LocationOnIcon />
                    Văn phòng miền Nam
                  </h6>
                  <p>
                    Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7, Tp.Hồ Chí Minh, VN
                  </p>
                  <a href="">Xem bản đồ</a>
                </li>
                <li>
                  <h6>
                    <LocationOnIcon />
                    Nhà máy DILIGO HOLDINGS
                  </h6>
                  <p>
                    Lô CB-27.1 KCN Thuận Thành II, An Bình, Thuận Thành, Bắc
                    Ninh
                  </p>
                  <a href="">Xem bản đồ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.listItem} col-3`}>
            <div className={styles.footerTitle}>
              <h5>VỀ CÔNG TY</h5>
            </div>
            <div className={styles.footerContent}>
              <ul>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Vị trí tuyển dụng
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Định hướng nghề nghiệp
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Đào tạo
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Diligo.vn
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Lipzo.com
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Nivahealthcare.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.listItem} col-3`}>
            <div className={styles.footerTitle}>
              <h5>HỖ TRỢ</h5>
            </div>
            <div className={styles.footerContent}>
              <ul>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Kiểm tra kết quả ứng tuyển
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Tìm việc gần bạn
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Quy trình tuyển dụng
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Dành cho nhân viên cũ
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Nhà phân phối sắp khai trương
                  </a>
                </li>
                <li>
                  <a href="">
                    <ArrowRightIcon />
                    Siêu thị sắp khai trương
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.listItem} col-2`}>
            <div className={styles.footerTitle}>
              <h5 style={{ textAlign: "right" }}>FANPAGE TUYỂN DỤNG</h5>
            </div>
            <div className={styles.footerContent}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuyendungdiligo&tabs=timeline&width=220&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=719322076103425"
                width="220"
                height="331"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                data-hide-cover="false"
                data-show-facepile="false"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
