import React from "react";
import styles from "../Banner/Banner.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon } from "react-share";
import zalo from "../../../assets/img/icon-svg/zalo-logo.jpg";
import demo from "../../../assets/img/icon-svg/1045.jpg"

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className={styles.Banner}>
          <h2 className={styles.Banner_h2}>
            NHÂN VIÊN KINH DOANH (NHÃN HÀNG LIPZO)
          </h2>
          <div class="row mb-2">
            <div class="col-md-4">
              <div class="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="">
                  <div className={styles.Banner_flex}>
                    <ul>
                      <li className={styles.Banner_li}> Nơi làm việc: </li>
                      <h6 className={styles.Banner_h6}>
                        Hà Nội, TP.HCM và 64 tỉnh thành khác
                      </h6>
                    </ul>
                    <ul className={styles.Banner_ul}>
                      <li className={styles.Banner_li}> Bộ phận: </li>
                      <h6 className={styles.Banner_h6}>Phòng kinh doanh</h6>
                    </ul>
                    <ul className={styles.Banner_ul}>
                      <li className={styles.Banner_li}> Cấp bậc: </li>
                      <h6 className={styles.Banner_h6}>Nhân viên</h6>
                    </ul>
                    <ul className={styles.Banner_ul}>
                      <li className={styles.Banner_li}> Hình thức: </li>
                      <h6 className={styles.Banner_h6}>
                        Làm việc toàn thời gian
                      </h6>
                    </ul>
                    <ul className={styles.Banner_ul}>
                      <li className={styles.Banner_li}> Bằng cấp: </li>
                      <h6 className={styles.Banner_h6}>Không yêu cầu</h6>
                    </ul>
                    <ul className={styles.Banner_ul}>
                      <li className={styles.Banner_li}> Thu nhập: </li>
                      <h6 className={styles.Banner_h6}>8-15.000.00 ++ VNĐ</h6>
                    </ul>
                    <ul className={styles.Banner_ul}>
                      <li className={styles.Banner_li}> Số lượng tuyển: </li>
                      <h6 className={styles.Banner_h6}>101</h6>
                    </ul>
                    <ul className={styles.Banner_ul}>
                      <li className={styles.Banner_li}> Hạn nộp hồ sơ: </li>
                      <h6 className={styles.Banner_h6}>27/04/2030</h6>
                    </ul>
                  </div>
                </div>
                <div className={styles.Banner_button}>
                  <button
                    type="button"
                    className={`${styles.Banner_button1} btn btn-danger`}
                  >
                    Ứng tuyển ngay
                  </button>
                </div>
                <div className={styles.Banner_link}>
                  <ContentCopyIcon
                    style={{ fontSize: "20px", marginTop: "-8px" }}
                  ></ContentCopyIcon>
                  <a className={styles.Banner_copy}>Copy link</a>
                  <div className={styles.Banner_Icon}>
                    <div className={styles.Banner_fb}>
                      <FacebookShareButton url="https://www.google.com.vn/search?tbm=isch&q=%E1%BA%A3nh+%C4%91%E1%BA%B9p#imgrc=GvS0Qa0LySjLlM">
                        <FacebookIcon size={28} />
                      </FacebookShareButton>
                    </div>
                    <div className={styles.Banner_fb}>
                        <img src={zalo} style={{width:"30px"}}/>
                    </div>
                    <div className={styles.Banner_fb}>
                      <LinkedinShareButton url="https://www.google.com.vn/search?tbm=isch&q=%E1%BA%A3nh+%C4%91%E1%BA%B9p#imgrc=GvS0Qa0LySjLlM">
                        <LinkedinIcon size={28} />
                      </LinkedinShareButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <img src={demo}  style={{width:"100%"}}/>
                {/* <div class="col p-4 d-flex flex-column position-static">
                  
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
