/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/img/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footerBox}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.logo}>
          <img src={logo} alt="" className={styles.logoImg} />
        </div>

        <div className={`${styles.list} row `}>
          <div className={`${styles.listItem} col-lg-4  `}>
            <div className={styles.footerTitle}>
              <h4 className={`${styles.title_heading} `}>
                CÔNG TY CỔ PHẦN DILIGO HOLDINGS
              </h4>
            </div>
            <div className={styles.footerContent}>
              <ul className={styles.ul_left}>
                <li className="d-flex ">
                  <LocationOnIcon className={styles.icon_location} />
                  <div className={styles.textContent}>
                    <h6 className={styles.office_title}>Văn phòng miền Bắc</h6>
                    <p className={styles.p_Element}>
                      Tầng 2, Tòa nhà N03T5, khu Đoàn ngoại giao, phường Xuân
                      Tảo, quận Bắc Từ Liêm, Hà Nội, VN
                    </p>
                    <a href="" className={styles.map_link}>
                      Xem bản đồ
                    </a>
                  </div>
                </li>
                <li className={`d-flex`}>
                  <LocationOnIcon className={styles.icon_location} />
                  <div className={styles.textContent}>
                    <h6 className={styles.office_title}>Văn phòng miền Nam</h6>
                    <p className={styles.p_Element}>
                      Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7, Tp.Hồ Chí Minh,
                      VN
                    </p>
                    <a href="" className={styles.map_link}>
                      Xem bản đồ
                    </a>
                  </div>
                </li>
                <li className={`d-flex`}>
                  <LocationOnIcon className={styles.icon_location} />
                  <div className={styles.textContent}>
                    <h6 className={styles.office_title}>
                      Nhà máy DILIGO HOLDINGS
                    </h6>
                    <p className={styles.p_Element}>
                      Lô CB-27.1 KCN Thuận Thành II, An Bình, Thuận Thành, Bắc
                      Ninh
                    </p>
                    <a href="" className={styles.map_link}>
                      Xem bản đồ
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row ">
              <div className={`${styles.listItem} col-lg-4 col-md-4 col-sm-6 `}>
                <div className={styles.footerTitle}>
                  <h4 className={styles.title_heading}>VỀ CÔNG TY</h4>
                </div>
                <div className={styles.footerContent}>
                  <ul className={styles.ul_Element}>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <Link to="/vi-tri-tuyen-dung">Vị trí tuyển dụng</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <Link to="/dinh-huong-nghe-nghiep">
                        Định hướng nghề nghiệp
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <Link to="/tro-giup">Đào tạo</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <a href="">Về chúng tôi</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <a href="">Diligo.vn</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <a href="">Lipzo.com</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <a href="">Nivahealthcare.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.listItem} col-lg-4 col-md-4 col-sm-6 `}>
                <div className={styles.footerTitle}>
                  <h4 className={styles.title_heading}>HỖ TRỢ</h4>
                </div>
                <div className={styles.footerContent}>
                  <ul className={styles.ul_Element}>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <a href="">Kiểm tra kết quả ứng tuyển</a>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <a href="">Tìm việc gần bạn</a>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <a href="">Câu hỏi thường gặp</a>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <a href="">Quy trình tuyển dụng</a>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <a href="">Dành cho nhân viên cũ</a>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <a href="">Nhà phân phối sắp khai trương</a>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <a href="">Siêu thị sắp khai trương</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.listItem} col-lg-4 col-md-4 col-sm-6 `}>
                <div className={styles.footerTitle}>
                  <h4 className={styles.title_heading}>FANPAGE TUYỂN DỤNG</h4>
                </div>
                <div className={styles.footerContent}>
                  {/* <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuyendungdiligo&tabs=timeline&width=220&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=719322076103425"
                    width="220"
                    height="400"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      paddingTop: `20px`,
                    }}
                    scrolling="no"
                    frameBorder="0"
                    data-hide-cover="false"
                    data-show-facepile="false"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className={styles.copyright}>
          <a href="#">
            {" "}
            Copyright ©2022 by Diligo Holdings. All Right Reserved.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
