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
                    <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/U3cP9WAcwFENJX7QA" className={styles.map_link}>
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
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/25+Nguy%E1%BB%85n+L%C6%B0%C6%A1ng+B%E1%BA%B1ng,+T%C3%A2n+Ph%C3%BA,+Qu%E1%BA%ADn+7,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000,+Vi%E1%BB%87t+Nam/@10.7218891,106.7241584,17z/data=!3m1!4b1!4m5!3m4!1s0x3175255fd2403787:0xed13dfbffbfd344a!8m2!3d10.7218838!4d106.7263471" className={styles.map_link}>
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
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Diligo+Holdings+-+Factory+Thu%E1%BA%ADn+Th%C3%A0nh+II/@21.0600978,106.1087758,17z/data=!3m1!4b1!4m5!3m4!1s0x3135a1d45e03df0f:0x4f2ede03cf1b9c30!8m2!3d21.0600928!4d106.1109645" className={styles.map_link}>
                      Xem bản đồ
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row ">
              <div className={`${styles.listItem} col-lg-4 col-md-6 col-sm-6 `}>
                <div className={styles.footerTitle}>
                  <h4 className={styles.title_heading}>VỀ CÔNG TY</h4>
                </div>
                <div className={styles.footerContent}>
                  <ul className={styles.ul_Element}>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <Link to="/tuyen-dung">Vị trí tuyển dụng</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <Link to="/dinh-huong-nghe-nghiep">
                        Định hướng nghề nghiệp
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />

                      <a href="http://daotao.diligo.vn" target="_blank" rel="noreferrer">Đào tạo</a>

                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <Link to="">Về chúng tôi</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <a href="http://diligo.vn" target="_blank" rel="noreferrer">Diligo.vn</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      
                      <a href="https://lipzo.com/" target="_blank" rel="noreferrer">Lipzo.com</a>

                    </li>
                    <li className="d-flex align-items-center">
                      <ArrowRightIcon />
                      <a href="http://nivahealthcare.com" target="_blank" rel="noreferrer">Nivahealthcare.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.listItem} col-lg-4 col-md-6 col-sm-6 `}> 
                <div className={styles.footerTitle}>
                  <h4 className={styles.title_heading}>HỖ TRỢ</h4>
                </div>
                <div className={styles.footerContent}>
                  <ul className={styles.ul_Element}>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <Link to="/tra-cuu">Tra cứu kết quả ứng tuyển</Link>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <Link to="/tim-viec-gan-ban">Tìm việc gần bạn</Link>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />

                      <Link to="/tro-giup">Câu hỏi thường gặp</Link>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <Link to="/tuyen-dung/chuyen-vien-lap-trinh-odoo?#2#2015">Quy trình tuyển dụng</Link>

                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <Link to="/danh-cho-nhan-vien-cu">Dành cho nhân viên cũ</Link>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <Link to="/nha-phan-phoi-sap-khai-truong">Nhà phân phối sắp khai trương</Link>
                    </li>
                    <li className="d-flex ">
                      <ArrowRightIcon />
                      <Link to="/sieu-thi-sap-khai-truong">Siêu thị sắp khai trương</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.listItem} col-lg-4 col-md-4 col-sm-6 `}>
                <div className={styles.footerTitle}>
                  <h4 className={styles.title_heading}>FANPAGE TUYỂN DỤNG</h4>
                </div>
                <div className={styles.footerContent}>
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuyendungdiligo&tabs=timeline&width=220&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=719322076103425"
                    width="290"
                    height="400"
                    style={{
                      width: `290px`,
                      border: "none",
                      overflow: "hidden",
                      paddingTop: `20px`,
                      paddingLeft: '10px',
                    }}
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
      </div>
      <div className="container">
        <p className={styles.copyright}>
          <Link to="#">
            {" "}
            Copyright ©2022 by Diligo Holdings. All Right Reserved.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
