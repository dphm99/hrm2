import React, { useContext, useEffect, useState } from "react";
import styles from "../Banner/Banner.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon } from "react-share";
import zalo from "../../../assets/img/icon-svg/zalo-logo.jpg";
import demo from "../../../assets/img/icon-svg/anhhh.jpg";
import CV from "../../../assets/img/Job-Icon-svg/CV.svg";
import { RecruitContext } from "../../../components/contexts/ContextRecuit";

const Banner = () => {
  const [city, setCity] = useState([]);
  const [active, setactive] = useState(0);
  const [category, setCategory] = useState("office");
  const { data } = useContext(RecruitContext);
  // console.log(data);
  const bannerAPI = [
    {
      img: CV,
      name: "Bước 1",
      title: "Đăng ký ứng tuyển, upload CV",
      short: "office",
    },
    {
      img: CV,
      name: "Bước 2",
      title: "Sàn lọc hồ sơ",
      short: "office",
    },
    {
      img: CV,
      name: "Bước 3",
      title: "Hẹn gặp, phỏng vấn online, trực tiếp",
      short: "factory",
    },
    {
      img: CV,
      name: "Bước 4",
      title: "Thông báo kết quả cho ứng viên",
      short: "office",
    },
    {
      img: CV,
      name: "Bước 5",
      title: "Tham gia hội nhập nhận việc",
      short: "office",
    },
  ];

  const postAPI =
    "https://api-nextcrm.nextcrm.vn/api/public/provinces?search[parent_id]=0";
    
  useEffect(() => {
    fetch(postAPI)
      .then((result) => result.json())
      .then((city) => {
        setCity(city.data);
        console.log(city.data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className={styles.Banner}>
          <h2 className={styles.Banner_h2}>
            NHÂN VIÊN KINH DOANH (NHÃN HÀNG LIPZO)
          </h2>
          <div className="row mb-2">
            <div
              className="col-md-4"
            >
              <div className={styles.Banner_sticky}
              >
                <div
                  className="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"

                >
                  <div className="">
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
            </div>
            <div className={`${styles.Banner_md7} col-md-7`}>
              <div className="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <img src={demo} style={{ width: "100%" }} />
                {/* <div className="col p-4 d-flex flex-column position-static">
                  
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
                        - Trưng bày, sắp xếp hàng hóa đẩm bảo quầy kệ gọn gàng,
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
                      <option selected disabled>
                        Toàn quốc
                      </option>
                      {city &&
                        city.map((e, index) => (
                          <option key={index}>{e.name}</option>
                        ))}
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
                          Tầng 2,Tòa nhà N03T5, khu Đoàn ngoại giao,p.Xuân
                          Tảo,q.Bắc Từ Liêm,Hà Nội, VN.
                          <br />
                          <h6
                            style={{
                              color: "rgb(185, 9, 9)",
                              fontStyle: "italic",
                            }}
                          >
                            Bản đồ.
                          </h6>
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
                          Số 25, Nguyễn Lương Bằng, phường Tân Phú, Quận 7,
                          TP.Hồ Chí Minh, VN.
                          <br />
                          <h6
                            style={{
                              color: "rgb(185, 9, 9)",
                              fontStyle: "italic",
                            }}
                          >
                            Bản đồ.
                          </h6>
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
                          Tòa nhà AN06, Nguyễn Chí Thanh,p.Chùa Láng,q.Đống
                          Đa,Hà Nội,VN.
                          <br />
                          <h6
                            style={{
                              color: "rgb(185, 9, 9)",
                              fontStyle: "italic",
                            }}
                          >
                            Bản đồ.
                          </h6>
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
                          Số 1001, Bàng Đỏ,p.Phường Hoa Phượng Đỏ,tx.Kiến An,Hải
                          Phòng, VN.
                          <br />
                          <h6
                            style={{
                              color: "rgb(185, 9, 9)",
                              fontStyle: "italic",
                            }}
                          >
                            Bản đồ.
                          </h6>
                        </label>
                      </div>
                    </div>
                    <div className={styles.Banner__btoon}>
                      <button className={styles.Banner__btn}>Xem thêm</button>
                    </div>
                  </div>
                </div>

                <div className={styles.Banner__procedure}>
                  <h4 className={styles.Banner__procedureh6}>
                    QUY TRÌNH TUYỂN DỤNG
                  </h4>
                  <div className={styles.Banner__recruit}>
                    <ul className={styles.Banner__recruitUL}>
                      {bannerAPI.map((e, index) => {
                        console.log(e.img);
                        return (
                          <li
                            key={index}
                            className={
                              active === index
                                ? `${styles.Banner__recruitLI} ${styles.active}`
                                : `${styles.Banner__recruitLI}`
                            }
                            onClick={() => {
                              setactive(index);
                              setCategory(e.short);
                            }}
                          >
                            <img src={e.img} className={styles.Banner__icon} />
                            <div className={styles.Banner__buoc}>{e.name}</div>
                            <div className={styles.Banner__upload}>
                              {e.title}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={styles.Banner__btoon5}>
                    <button className={styles.Banner__btn5}>
                      Xem chi tiết tại đây
                    </button>
                  </div>
                </div>

                <div className={styles.Banner__Applynow}>
                  <div className={styles.Banner__Apply}>
                    <a>GỬI CV, ỨNG TUYỂN NGAY</a>
                  </div>
                </div>

                <div className={styles.Banner__Map}>
                  <h5 className={styles.Banner__MapH5}>
                    Một số vị trí tương đương
                  </h5>
                  <ul>
                    <p className={styles.Banner__MapMap}>
                      - Chuyên viên hỗ trợ kinh doanh (kinh doanh) <a>tại</a>{" "}
                      <a className={styles.Banner__MapP}>Hà Nội</a>
                    </p>
                    <p className={styles.Banner__MapMap}>
                      - Quản lý sàn TMĐT (Marketing) <a>tại</a>{" "}
                      <a className={styles.Banner__MapP}>TP.Hồ Chí Minh</a>
                    </p>
                    <p className={styles.Banner__MapMap}>
                      - Giám sát khu vực (kinh doanh) <a>tại</a>{" "}
                      <a className={styles.Banner__MapP}>Hải Dương</a>
                    </p>
                  </ul>
                </div>
                <div className={styles.Banner_demo}>
                  <img src={demo} />
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
