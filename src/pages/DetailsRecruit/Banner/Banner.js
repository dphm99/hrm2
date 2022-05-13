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
import formatNumber from "../../../components/extensions/formatNumber";
import {formatDate} from "../../../components/extensions/formatDate"

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const Banner = () => {
  const [city, setCity] = useState([]);
  const [active, setactive] = useState(0);
  const [activelocation, setActivelocation] = useState(0);
  const { data } = useContext(RecruitContext);
  const jobIndex = window.location.hash.split("#")[1];
  const jobId = window.location.hash.split("#")[2];
  const currentURL = window.location.href

  const [copySuccess, setCopySuccess] = useState("");

  // your function to copy here

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Đã lưu");
    } catch (err) {
      setCopySuccess("Đã xảy ra lỗi");
    }
  };

  const currentCategory =
    data.find((ele) => ele.id === Number(jobId)) &&
    data.find((ele) => ele.id === Number(jobId)).category;
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
      title:
        data.find((ele) => ele.id === Number(jobId)) &&
        `${data.find((ele) => ele.id === Number(jobId)).name.name}`,

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
      title: "Sàng lọc hồ sơ",
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
      });
  }, [city]);

  return (
    <>
      <div className="container">
        <div className={styles.detailsRecuit}>
          <Breadcrumbs breadItem={breadcrumItem} />
          <h2 className={styles.title}>
            {data.find((ele) => ele.id === Number(jobId)) &&
              `${data.find((ele) => ele.id === Number(jobId)).name.name}`}
          </h2>
          <div className="row mb-2">
            <div className={`${styles.detailsCol4} col-lg-4`}>
              <div className={styles.detailsSticky}>
                {data.find((ele) => ele.id === Number(jobId)) && (
                  <div className="row g-0 overflow-hidden flex-md-row mb-4 Regular shadow h-md-250 position-relative">
                    <div className="">
                      <div className={styles.detailsFlex}>
                        <ul>
                          <li> Nơi làm việc: </li>
                          <h6>
                            {
                              data.find((ele) => ele.id === Number(jobId))
                                .address.name
                            }
                          </h6>
                        </ul>
                        <ul>
                          <li> Bộ phận: </li>
                          <h6>
                            {
                              data.find((ele) => ele.id === Number(jobId))
                                .department.name
                            }
                          </h6>
                        </ul>
                        <ul>
                          <li> Cấp bậc: </li>
                          <h6>
                            {
                              data.find((ele) => ele.id === Number(jobId))
                                .industry
                            }
                          </h6>
                        </ul>
                        <ul>
                          <li> Hình thức: </li>
                          <h6> Làm việc toàn thời gian </h6>
                        </ul>
                        <ul>
                          <li> Bằng cấp: </li>
                          <h6>
                            {
                              data.find((ele) => ele.id === Number(jobId))
                                .degree.name
                            }
                          </h6>
                        </ul>
                        <ul>
                          <li> Thu nhập: </li>
                          <h6>
                            {data.find((ele) => ele.id === Number(jobId))
                              .salary[0] === "ltt"
                              ? "Lương thỏa thuận"
                              : formatNumber(
                                data
                                  .find((ele) => ele.id === Number(jobId))
                                  .salary.split(" - ")[0]
                                  .slice(0, -4),
                                0,
                                ",",
                                "."
                              ) +
                              " - " +
                              formatNumber(
                                data
                                  .find((ele) => ele.id === Number(jobId))
                                  .salary.split(" - ")[1]
                                  .slice(0, -4),
                                0,
                                ",",
                                "."
                              ) +
                              " " +
                              data
                                .find((ele) => ele.id === Number(jobId))
                                .salary.split(" - ")[1]
                                .slice(-4)}
                          </h6>
                        </ul>
                        <ul>
                          <li> Số lượng tuyển: </li>
                          <h6>
                            {data.find((ele) => ele.id === Number(jobId)) &&
                              data.find((ele) => ele.id === Number(jobId))
                                .number}
                          </h6>
                        </ul>
                        <ul>
                          <li> Hạn nộp hồ sơ: </li>
                          <h6>
                            {
                              formatDate(data.find((ele) => ele.id === Number(jobId))
                              .deadline,"-","/")
                              
                            }
                          </h6>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.detailsBtn}>
                      <Link
                        className={styles.BannerLink}
                        to={{
                          pathname: `/ung-tuyen/${toSlug(
                            data.find((ele) => ele.id === Number(jobId)).name
                              .name
                          )}`,
                          search: `#${jobIndex}#${data.find((ele) => ele.id === Number(jobId)).id
                            }`,
                        }}
                      >
                        <button className="btn">Ứng tuyển ngay</button>
                      </Link>
                    </div>
                    <div className={`${styles.detailsLink} row-md`}>
                      <div className={` col-md-6`}>
                        <ContentCopyIcon
                          style={{ fontSize: "14px", marginTop: "-2px" }}
                        ></ContentCopyIcon>
                        <button onClick={() => copyToClipBoard(currentURL)}>Copy link</button>
                        {copySuccess}
                      </div>
                      <div className={`${styles.detailsIcon} col-md-6`}>
                        <div className={styles.detailsfb}>
                          <FacebookShareButton url="https://www.google.com.vn/search?tbm=isch&q=%E1%BA%A3nh+%C4%91%E1%BA%B9p#imgrc=GvS0Qa0LySjLlM">
                            <FacebookIcon size={28} />
                          </FacebookShareButton>
                        </div>
                        <div className={styles.detailsfb}>
                          <img src={zalo} style={{ width: "30px" }} alt="/" />
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
            <div className={`${styles.detailsSidebar} col-lg-8`}>
              <div className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <img src={demo} style={{ width: "100%" }} alt="/" />
                <h4>Mô tả công việc</h4>
                <div>
                  <ul>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          data.find((ele) => ele.id === Number(jobId)) &&
                          data.find((ele) => ele.id === Number(jobId))
                            .description,
                      }}
                      className={styles.detailsjobIndex}
                    ></div>
                  </ul>
                </div>
                <div>
                  <h5>Yêu cầu công việc</h5>
                  <div>
                    <ul>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            data.find((ele) => ele.id === Number(jobId)) &&
                            data.find((ele) => ele.id === Number(jobId))
                              .require,
                        }}
                        className={styles.detailsjobIndex}
                      ></div>
                    </ul>
                  </div>
                </div>
                { }
                <div className={styles.welfare}>
                  <h5>Chính sách & Phúc lợi</h5>
                  {data.find((ele) => ele.id === Number(jobId)) ? (
                    <div>
                      <ul>
                        <div
                          // dangerouslySetInnerHTML={{
                          //   __html:
                          //     data.find((ele) => ele.id === Number(jobId)) &&
                          //     data
                          //       .find((ele) => ele.id === Number(jobId))
                          //       .welfare.map((ele) => ele.name),
                          // }}
                          className={`${styles.detailsjobName}  d-flex justify-content-start align-items-center`}
                        >
                          {data.find((ele) => ele.id === Number(jobId)) &&
                            data
                              .find((ele) => ele.id === Number(jobId))
                              .welfare.map((ele, index) => {
                                return (
                                  <div
                                    className={`${styles.chip} d-flex justify-content-center`}
                                    key={index}
                                  >
                                    {ele.name}
                                  </div>
                                );
                              })}
                        </div>
                      </ul>
                    </div>
                  ) : (
                    <li>Đang cập nhật</li>
                  )}
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
                      {data &&
                        data.map((e, index) => (
                          <option key={index}>{e.address.name}</option>
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
                        className={`${styles.detailsLabel}`}
                        htmlFor="flexCheckDefault"
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
                          className={`${styles.detailsLabelcheck} form-check-label`}
                          htmlFor="flexRadioDefault1"
                        >
                          Tầng 2,Tòa nhà N03T5, khu Đoàn ngoại giao,p.Xuân
                          Tảo,q.Bắc Từ Liêm,Hà Nội, VN.
                          <br />
                          <a
                            target="blank"
                            href="https://www.google.com/maps/place/Chung+c%C6%B0+N03-T5+Ngo%E1%BA%A1i+Giao+%C4%90o%C3%A0n/@21.0645021,105.797158,17z/data=!3m1!4b1!4m5!3m4!1s0x3135aad954cd6a6f:0x119a90b9e06b1a16!8m2!3d21.0644971!4d105.7993467"
                          >
                            <h6
                              style={{
                                color: "rgb(185, 9, 9)",
                                fontStyle: "italic",
                                fontWeight: "700",
                              }}
                            >
                              Bản đồ.
                            </h6>
                          </a>
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
                          className={`${styles.detailsLabelcheck} form-check-label`}
                          htmlFor="flexRadioDefault1"
                        >
                          Số 25, Nguyễn Lương Bằng, phường Tân Phú, Quận 7,
                          TP.Hồ Chí Minh, VN.
                          <br />
                          <a
                            target="blank"
                            href="https://www.google.com/maps/place/25+Nguy%E1%BB%85n+L%C6%B0%C6%A1ng+B%E1%BA%B1ng,+T%C3%A2n+Ph%C3%BA,+Qu%E1%BA%ADn+7,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000,+Vi%E1%BB%87t+Nam/@10.7218891,106.7241584,17z/data=!3m1!4b1!4m5!3m4!1s0x3175255fd2403787:0xed13dfbffbfd344a!8m2!3d10.7218838!4d106.7263471"
                          >
                            <h6
                              style={{
                                color: "rgb(185, 9, 9)",
                                fontStyle: "italic",
                                fontWeight: "700",
                              }}
                            >
                              Bản đồ.
                            </h6>
                          </a>
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
                          className={`${styles.detailsLabelcheck} form-check-label`}
                          htmlFor="flexRadioDefault1"
                        >
                          Tòa nhà AN06, Nguyễn Chí Thanh,p.Chùa Láng,q.Đống
                          Đa,Hà Nội,VN.
                          <br />
                          <a
                            target="blank"
                            href="https://www.google.com/maps/search/T%C3%B2a+nh%C3%A0+AN06,+Nguy%E1%BB%85n+Ch%C3%AD+Thanh,+Ch%C3%B9a+L%C3%A1ng,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i/@21.0203785,105.8023134,16z/data=!3m1!4b1?hl=vi"
                          >
                            <h6
                              style={{
                                color: "rgb(185, 9, 9)",
                                fontStyle: "italic",
                                fontWeight: "700",
                              }}
                            >
                              Bản đồ.
                            </h6>
                          </a>
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
                          className={`${styles.detailsLabelcheck} form-check-label`}
                          htmlFor="flexRadioDefault1"
                        >
                          Số 1001, Bàng Đỏ,p.Phường Hoa Phượng Đỏ,tx.Kiến An,Hải
                          Phòng, VN.
                          <br />
                          <a
                            target="blank"
                            href="https://www.google.com/maps/search/S%E1%BB%91+1001,+B%C3%A0ng+%C4%90%E1%BB%8F,+Ph%C6%B0%E1%BB%9Dng+Hoa+Ph%C6%B0%E1%BB%A3ng+%C4%90%E1%BB%8F,+Ki%E1%BA%BFn+An,+H%E1%BA%A3i+Ph%C3%B2ng,+VN./@20.8240037,106.6071066,12z/data=!3m1!4b1"
                          >
                            {/* <button onClick={handleClick} type="button" /> */}
                            <h6
                              style={{
                                color: "rgb(185, 9, 9)",
                                fontStyle: "italic",
                                fontWeight: "700",
                              }}
                            >
                              Bản đồ.
                            </h6>
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className={styles.detailsButton}>
                      <button>Xem thêm</button>
                    </div>
                  </div>
                </div>

                <div className={styles.detailsProcedure}>
                  <h4 style={{ lineHeight: 1.7 }}>QUY TRÌNH TUYỂN DỤNG</h4>
                  <div className={styles.detailsRecruit}>
                    <ul className={styles.detailsRecruitUL}>
                      {bannerAPI.map((e, index) => {
                        // console.log(e.img);
                        return (
                          <Link
                            to="/quy-trinh-tuyen-dung"
                            key={index}
                            className={
                              active === index
                                ? `${styles.detailsRecruitLI} ${styles.active}`
                                : `${styles.detailsRecruitLI}`
                            }
                            onClick={() => {
                              setactive(index);

                              // setCategory(e.short);
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
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={styles.detailsRecruiBtn}>
                    <button>
                      <Link to="/quy-trinh-tuyen-dung">
                        Xem chi tiết tại đây
                      </Link>
                    </button>
                  </div>
                </div>

                <div className={styles.detailsApplynow}>
                  <div className={styles.detailsApply}>
                    <Link
                      to={{
                        pathname: `/ung-tuyen/${toSlug(
                          data.find((ele) => ele.id === Number(jobId)) &&
                          data.find((ele) => ele.id === Number(jobId)).name
                            .name
                        )}`,
                        search: `#${jobIndex}#${data.find((ele) => ele.id === Number(jobId)) &&
                          data.find((ele) => ele.id === Number(jobId)).id
                          }`,
                      }}
                    >
                      GỬI CV, ỨNG TUYỂN NGAY
                    </Link>
                  </div>
                </div>

                <div className={styles.detailsMap}>
                  <h5>Một số vị trí tương đương</h5>

                  {data &&
                    data
                      .filter((e) => e.category === currentCategory)
                      .map((value, index) => {
                        return (
                          <div key={index}>
                            <ul>
                              <Link
                                to={{
                                  pathname: `/tuyen-dung/${toSlug(
                                    value.name.name
                                  )}`,
                                  search: `#${index}#${value.id}`,
                                }}
                                className={
                                  activelocation === index
                                    ? `${styles.location} ${styles.activelocation}`
                                    : `${styles.location}`
                                }
                                onClick={() => {
                                  setActivelocation(index);
                                  scrollToTop();
                                }}
                              >
                                - {value.name.name} tại{" "}
                                <small className={styles.detailsDecoration}>
                                  {value.address.name}
                                </small>
                              </Link>
                            </ul>
                          </div>
                        );
                      })}
                </div>
                <div className={styles.detailsImage}>
                  <img src={demo} alt="/" />
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
