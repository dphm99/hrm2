import React, { useContext, useEffect, useState } from "react";
import styles from "../Banner/Banner.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon } from "react-share";
import zalo from "../../../assets/img/icon-svg/zalo-logo.jpg";
import demo from "../../../assets/img/icon-svg/anhhh.jpg";
import CV from "../../../assets/img/Job-Icon-svg/CV.svg";
import { RecruitContext } from "../../../components/contexts/ContextRecuit";
import Breadcrumbs from "../../../components/BreadCrumb/Breadcrumb";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toSlug } from "../../../components/extensions/toSlug";
const Banner = () => {
  const [city, setCity] = useState([]);
  const [active, setactive] = useState(0);
  const [category, setCategory] = useState("office");
  const { data } = useContext(RecruitContext);
  const jobIndex = window.location.hash.split("#")[1];
  const jobId = window.location.hash.split("#")[2];
  console.log(jobId);

  // const jobData = data[jobIndex].jobId
  // console.log(jobData);

  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/tuyen-dung",
      title: "Vị trí tuyển dụng",
      isActive: false,
    },

    {
      href: "/nhan-viên-kinh-doanh",
      title: "nhan-viên-kinh-doanh",
      isActive: true,
    },
  ];
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
        // console.log(city.data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className={styles.detailsRecuit}>
          <Breadcrumbs breadItem={breadcrumItem} />
          <h2>{data[jobIndex] && data[jobIndex].name.name}</h2>
          <div className="row mb-2">
            <div className="col-md-4">
              <div className={styles.detailsSticky}>
                {data[jobIndex] && (
                  <div className="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="">
                      <div className={styles.detailsFlex}>
                        <ul>
                          <li> Nơi làm việc: </li>
                          <h6>{data[jobIndex].address.name}</h6>
                        </ul>
                        <ul>
                          <li> Bộ phận: </li>
                          <h6>{data[jobIndex].department.name}</h6>
                        </ul>
                        <ul>
                          <li> Cấp bậc: </li>
                          <h6>{data[jobIndex].industry}</h6>
                        </ul>
                        <ul>
                          <li> Hình thức: </li>
                          <h6> Làm việc toàn thời gian </h6>
                        </ul>
                        <ul>
                          <li> Bằng cấp: </li>
                          <h6>{data[jobIndex].degree.name}</h6>
                        </ul>
                        <ul>
                          <li> Thu nhập: </li>
                          <h6>
                            {data[jobIndex].salary == "ltt"
                              ? "Lương thỏa thuận"
                              : data[jobIndex].salary}
                          </h6>
                        </ul>
                        <ul>
                          <li> Số lượng tuyển: </li>
                          <h6>101</h6>
                        </ul>
                        <ul>
                          <li> Hạn nộp hồ sơ: </li>
                          <h6>{data[jobIndex].deadline}</h6>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.detailsBtn}>
                      <Link
                        className={styles.BannerLink}
                        to={{
                          pathname: `/ung-tuyen/${toSlug(
                            data[jobIndex].name.name
                          )}`,
                          search: `#${jobIndex}#${data[jobIndex].id}`,
                        }}
                      >
                        <button className="btn">
                          Ứng tuyển ngay
                        </button>
                      </Link>
                    </div>
                    <div className={styles.detailsLink}>
                      <ContentCopyIcon
                        style={{ fontSize: "14px", marginTop: "-2px" }}
                      ></ContentCopyIcon>
                      <a href="#">
                        Copy link
                      </a>
                      <div className={styles.detailsIcon}>
                        <div className={styles.detailsfb}>
                          <FacebookShareButton url="https://www.google.com.vn/search?tbm=isch&q=%E1%BA%A3nh+%C4%91%E1%BA%B9p#imgrc=GvS0Qa0LySjLlM">
                            <FacebookIcon size={28} />
                          </FacebookShareButton>
                        </div>
                        <div className={styles.detailsfb}>
                          <img src={zalo} style={{ width: "30px" }} />
                        </div>
                        <div className={styles.detailsfb}>
                          <LinkedinShareButton url="https://www.google.com.vn/search?tbm=isch&q=%E1%BA%A3nh+%C4%91%E1%BA%B9p#imgrc=GvS0Qa0LySjLlM">
                            <LinkedinIcon size={28} />
                          </LinkedinShareButton>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={`${styles.detailsSidebar} col-md-8`}>
              <div className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <img src={demo} style={{ width: "100%" }} />
                <h4>Mô tả công việc</h4>
                <div>
                  <ul>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data[jobIndex] && data[jobIndex].description,
                      }}
                    ></div>
                  </ul>
                </div>
                <div>
                  <h5>Yêu cầu công việc</h5>
                  <div>
                    <ul>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data[jobIndex] && data[jobIndex].require,
                        }}
                      ></div>
                    </ul>
                  </div>
                </div>

                <div>
                  <h5>Chính sách & Phúc lợi</h5>
                  <div>
                    <ul>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            data[jobIndex] &&
                            data[jobIndex].welfare.map((ele) => ele.name),
                        }}
                      ></div>
                    </ul>
                  </div>
                </div>

                <div className={styles.detailsSideBarCity}>
                  <h4>
                    Địa điểm làm việc (
                    <a
                      href="/"
                      style={{ color: "#bf202e", textDecoration: "none" }}
                    >
                      64
                    </a>{" "}
                    tỉnh thành)
                  </h4>
                  <div>
                    <select
                      className={styles.detailsSelect}
                      defaultValue={"disabled"}
                    >
                      <option disabled value="disabled">
                        Toàn quốc
                      </option>
                      {city &&
                        city.map((e, index) => (
                          <option key={index}>{e.name}</option>
                        ))}
                    </select>

                    <div className={`${styles.detailscheck} form-check`}>
                      <input
                        className={`${styles.detailsInput} form-check-input`}
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                        style={{
                          color: "#bf202e",
                          marginLeft: "12px",
                          fontSize: "16px",
                          fontWeight: "600",
                          marginTop: "6px"
                        }}
                      >
                        Xem địa điểm làm việc gần bạn nhất
                      </label>
                    </div>
                    <div className={styles.detailsFormcheck}>
                      <div className={`${styles.detailscheck} form-check`}>
                        <input
                          className={`${styles.detailsRadio} form-check-input`}
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                          style={{ marginTop: "-6px", marginLeft: "12px" }}
                        >
                          Tầng 2,Tòa nhà N03T5, khu Đoàn ngoại giao,p.Xuân
                          Tảo,q.Bắc Từ Liêm,Hà Nội, VN.
                          <br />
                          <h6
                            style={{
                              color: "rgb(185, 9, 9)",
                              fontStyle: "italic",
                              fontWeight: "700"
                            }}
                          >
                            Bản đồ.
                          </h6>
                        </label>
                      </div>
                      <div className={`${styles.detailscheck} form-check`}>
                        <input
                          className={`${styles.detailsRadio} form-check-input`}
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                          style={{ marginTop: "-6px", marginLeft: "12px" }}
                        >
                          Số 25, Nguyễn Lương Bằng, phường Tân Phú, Quận 7,
                          TP.Hồ Chí Minh, VN.
                          <br />
                          <h6
                            style={{
                              color: "rgb(185, 9, 9)",
                              fontStyle: "italic",
                              fontWeight: "700"
                            }}
                          >
                            Bản đồ.
                          </h6>
                        </label>
                      </div>
                      <div className={`${styles.detailscheck} form-check`}>
                        <input
                          className={`${styles.detailsRadio} form-check-input`}
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                          style={{ marginTop: "-6px", marginLeft: "12px" }}
                        >
                          Tòa nhà AN06, Nguyễn Chí Thanh,p.Chùa Láng,q.Đống
                          Đa,Hà Nội,VN.
                          <br />
                          <h6
                            style={{
                              color: "rgb(185, 9, 9)",
                              fontStyle: "italic",
                              fontWeight: "700"
                            }}
                          >
                            Bản đồ.
                          </h6>
                        </label>
                      </div>
                      <div className={`${styles.detailscheck} form-check`}>
                        <input
                          className={`${styles.detailsRadio} form-check-input`}
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                          style={{ marginTop: "-6px", marginLeft: "12px" }}
                        >
                          Số 1001, Bàng Đỏ,p.Phường Hoa Phượng Đỏ,tx.Kiến An,Hải
                          Phòng, VN.
                          <br />
                          <h6
                            style={{
                              color: "rgb(185, 9, 9)",
                              fontStyle: "italic",
                              fontWeight: "700"
                            }}
                          >
                            Bản đồ.
                          </h6>
                        </label>
                      </div>
                    </div>
                    <div className={styles.detailsButton}>
                      <button>Xem thêm</button>
                    </div>
                  </div>
                </div>

                <div className={styles.detailsProcedure}>
                  <h4>QUY TRÌNH TUYỂN DỤNG</h4>
                  <div className={styles.detailsRecruit}>
                    <ul className={styles.detailsRecruitUL}>
                      {bannerAPI.map((e, index) => {
                        // console.log(e.img);
                        return (
                          <li
                            key={index}
                            className={
                              active === index
                                ? `${styles.detailsRecruitLI} ${styles.active}`
                                : `${styles.detailsRecruitLI}`
                            }
                            onClick={() => {
                              setactive(index);
                              setCategory(e.short);
                            }}
                          >
                            <img
                              src={e.img}
                              className={styles.detailsRecruiIcon}
                              alt={e.title}
                            />
                            <h1 className={styles.detailsRecruiBuoc}>
                              {e.name}
                            </h1>
                            <span className={styles.detailsRecruiUpload}>
                              {e.title}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={styles.detailsRecruiBtn}>
                    <button>Xem chi tiết tại đây</button>
                  </div>
                </div>

                <div className={styles.detailsApplynow}>
                  <div className={styles.detailsApply}>
                    <a>GỬI CV, ỨNG TUYỂN NGAY</a>
                  </div>
                </div>

                <div className={styles.detailsMap}>
                  <h5>Một số vị trí tương đương</h5>
                  <ul>
                    <p>
                      - Chuyên viên hỗ trợ kinh doanh (kinh doanh) <a>tại</a>{" "}
                      <a className={styles.detailsText}>Hà Nội</a>
                    </p>
                    <p>
                      - Quản lý sàn TMĐT (Marketing) <a>tại</a>{" "}
                      <a className={styles.detailsText}>TP.Hồ Chí Minh</a>
                    </p>
                    <p>
                      - Giám sát khu vực (kinh doanh) <a>tại</a>{" "}
                      <a className={styles.detailsText}>Hải Dương</a>
                    </p>
                  </ul>
                </div>
                <div className={styles.detailsImage}>
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
