import React from "react";
import styles from "../Banner/Banner.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon } from "react-share";
import zalo from "../../../assets/img/icon-svg/zalo-logo.jpg";
import demo from "../../../assets/img/icon-svg/1045.jpg";

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
                      <img src={zalo} style={{ width: "30px" }} />
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
            <div class="col-md-7">
              <div class="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <img src={demo} style={{ width: "100%" }} />
                {/* <div class="col p-4 d-flex flex-column position-static">
                  
                </div> */}
                <div>
                  <h4 className={styles.Banner_hh6}>Mô tả công việc</h4>
                  <div>
                    <ul className={styles.Banner_uul}>
                      <p>
                        - Tư vấn hỗ trợ khách hàng đến siêu thị Bách Hóa Xanh để
                        mua sắn, trải nghiệm
                      </p>
                      <p>
                        - Trưng bày, sắp xếp hàng hóa đẩm bảo quầy kệ gọ gàng,
                        sạch sẽ.
                      </p>
                      <p>- Kiểm kê hàng hóa siêu thị.</p>
                      <p>
                        - Nhập hàng từ nhà cung cấp hoặc kho tổng (Cân, Nhập,
                        Kiểm đếm)
                      </p>
                      <p>- Vệ sinh siêu thị (Lau dọn sàn,kính,quầy kệ)</p>
                      <p>- Bừng bê/sắp xếp hàng, quản lý kho hàng gọn gàng</p>
                      <p>
                        - Là người nhân viên đa nhiệm, linh hoạt bạn có thể làm
                        thêm cách vị trí công việc khác như Thu Ngân/Fresh, hoặc
                        các công việc theo sự phân công của quản lý.
                      </p>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={styles.Banner_hh4}>Yêu cầu công việc</h4>
                  <div>
                    <ul className={styles.Banner_uul}>
                      <p>- Nam/nữ từ 18-40 tuổi</p>
                      <p>- Thân thiện, nhiệt tình, muốn gắn bó lâu dài</p>
                      <p>- Có sức khỏe tốt, tháo vác, có trách nhiệm.</p>
                      <p>
                        - Có điện thoại smartphone để làm việc, chủ động phương
                        tiện di chuyển (xe máy)
                      </p>
                      <p>
                        - Sẵn sàng làm đa nhiệm: Đi bán hàng ngoài thị trường -
                        Hỗ trợ vận chuyển - Làm báo cáo
                      </p>
                      <p>- Làm fulltime 8tiếng/ ngày (theo giờ hành chính)</p>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={styles.Banner_hh4}>Chính sách & Phúc lợi</h4>
                  <div>
                    <ul className={styles.Banner_uul}>
                      <p>
                        - Thu nhập trung bình từ 7-10 triệu trở lên theo hiệu
                        quả làm việc và giờ công làm việc
                      </p>
                      <p>
                        - Thưởng trong tháng và cuối năm hấp dẫn (Thưởng tết
                        tương đương 3 tháng thu nhập, số liệu 3 năm gần nhất
                      </p>
                      <p>
                        - Có cơ hội thăng tiến lên Quản lý rõ ràng-làm chủ siêu
                        thị.
                      </p>
                      <p>- Công việc bố trí làm việc thuận tiền gần nhà</p>
                      <p>
                        - Có sự hướng dẫn, đạo tạo phát triển kỹ năng/chuyên môn
                        liên tục
                      </p>
                      <p>
                        - Ký hợp đồng lao động, công việc chính Thức lâu dài -
                        ỔN định
                      </p>
                      <p>- Môi trường làm việc thân thiện, hỗ trợ đồng đội</p>
                      <p>
                        - Phúc lợi đầy đủ : Tham gia BHYT , BHXH, Đi du lịch
                        Teambuilding, 12 ngày phép/ năm, nghĩ thai sản, ốm đau
                        ...
                      </p>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={styles.Banner_hh4}>
                    Địa điểm làm việc (<a style={{ color: "red" }}>64</a> tỉnh
                    thành)
                  </h4>
                  <div>
                    <select className={styles.Banner_select}>
                      <option selected>Toàn quốc</option>
                    </select>
                    
                    <div className={`${styles.Banner_check} form-check`}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                        style={{ color: "rgb(185, 9, 9)" }}
                      >
                        Xem địa điểm làm việc gần bạn nhất
                      </label>
                    </div>
                    <div className={styles.Banner_checkbox}>
                    <div className={`${styles.Banner_check} form-check`}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Tầng 2,Tòa nhà N03T5, khu Đoàn ngoại giao,p.Xuân Tảo,q.Bắc Từ Liêm,Hà Nội, VN.<br/>
                        <h6 style={{ color: "rgb(185, 9, 9)",fontStyle: "italic" }}>Bản đồ.</h6>
                      </label>
                    </div>
                    <div className={`${styles.Banner_check} form-check`}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Số 25, Nguyễn Lương Bằng, phường Tân Phú, Quận 7, TP.Hồ Chí Minh, VN.<br/>
                        <h6 style={{ color: "rgb(185, 9, 9)",fontStyle: "italic" }}>Bản đồ.</h6>
                      </label>
                    </div>
                    <div className={`${styles.Banner_check} form-check`}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Tòa nhà AN06, Nguyễn Chí Thanh,p.Chùa Láng,q.Đống Đa,Hà Nội,VN.<br/>
                        <h6 style={{ color: "rgb(185, 9, 9)",fontStyle: "italic" }}>Bản đồ.</h6>
                      </label>
                    </div>
                    <div className={`${styles.Banner_check} form-check`}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                          Số 1001, Bàng Đỏ,p.Phường Hoa Phượng Đỏ,tx.Kiến An,Hải Phòng, VN.<br/>
                        <h6 style={{ color: "rgb(185, 9, 9)",fontStyle: "italic" }}>Bản đồ.</h6>
                      </label>
                    </div>
                    </div>
                    <div className={styles.Banner__btoon}>
                      <button className={styles.Banner__btn}>Xem thêm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
