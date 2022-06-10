import { useState, useContext, useEffect } from "react";
import styles from "./JobRecruit.module.css";
import { RecruitContext } from "../contexts/ContextRecuit";
import JobItem from "./JobItem";
import Category from "./Category";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import uniqueArray from "../extensions/uniqueArray";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import kinhdoanh from "../../assets/img/Vacancies/Kinh-doanh.svg";
import marketing from "../../assets/img/Vacancies/Marketing.svg";
import nhasanxuat from "../../assets/img/Vacancies/San-xuat.svg";
import taichinh from "../../assets/img/Vacancies/Tai-chinh.svg";
import nhansu from "../../assets/img/Vacancies/Nhan-su.svg";
import congnghe from "../../assets/img/Vacancies/Ban-cong-nghe.svg";
import nhaphanphoi from "../../assets/img/Vacancies/Nha-phan-phoi.svg";
import { Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import longBanner from "../../assets/img/banner3.jpg";
import clsx from "clsx";
import { Helmet } from "react-helmet";

export const jobCategory = [
  {
    img: marketing,
    short: "marketing",
    name: "Marketing",
  },
  {
    img: kinhdoanh,
    short: "kinhdoanh",
    name: "Kinh Doanh",
  },
  {
    img: nhasanxuat,
    short: "nhasanxuat",
    name: "Nhà máy",
  },
  {
    img: taichinh,
    short: "taichinh",
    name: "Tài Chính",
  },
  {
    img: nhansu,
    short: "nhansu",
    name: "Nhân Sự",
  },
  {
    img: congnghe,
    short: "congnghe",
    name: "Công Nghệ",
  },
  {
    img: nhaphanphoi,
    short: "nhaphanphoi",
    name: "Nhà phân phối",
  },
];
export const timeWork = [
  {
    short: "fulltime",
    name: "Toàn thời gian",
  },
  {
    short: "part_time",
    name: "Bán thời gian",
  },
];

function JobRecruits() {
  const { keySearch, setKeySearch, data } = useContext(RecruitContext);

  const [position, setPosition] = useState("");
  const jobIndex = window.location.hash.split("#")[1];
  const search = useLocation().search;
  const jobName = new URLSearchParams(search).get("q");
  const jobLocation = new URLSearchParams(search).get("city");
  const major = new URLSearchParams(search).get("major");
  const time_work = new URLSearchParams(search).get("timing");
  const [check, setCheck] = useState(false);
  const [sort, setSort] = useState(0);
  const [show, setShow] = useState(false);

  let status = {
    true: 1,
    "": 2,
  };

  useEffect(() => {
    if (jobName) {
      setKeySearch(jobName);
    }
    if (jobLocation) {
      setPosition(jobLocation);
    }
  }, [jobLocation, jobName, setKeySearch]);
  Array.prototype.sortAlpha = function () {
    switch (sort) {
      case 0:
        return this.sort();
      case 1:
        return this.reverse();
      case 2:
        return this.sort(function (a, b) {
          var dateA = new Date(a.deadline),
            dateB = new Date(b.deadline);
          return dateA - dateB;
        });
      case 3:
        return this.sort((a, b) => {
          return status[a.status] - status[b.status];
        });
      default:
        console.log("");
    }
  };
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/vi-tri-tuyen-dung",
      title: "Vị trí tuyển dụng",
      isActive: true,
    },
  ];
  const category = [];
  const address = [];
  const industry = [];
  const timing = [];

  data &&
    data.forEach((job) => {
      category.push(job.category);
      address.push(job.address.name);
      industry.push(job.industry);
      timing.push(job.time_work);
    });

  return (
    <div className={`container ${styles.customContainer}`}>
      <Helmet>
        <title>Vị trí tuyển dụng - Diligo</title>
        <meta name="description" content={`Vị trí tuyển dụng - Diligo`} />
      </Helmet>
      <Breadcrumbs breadItem={breadcrumItem} />
      <div className={`${styles.head_recruit} row`}>
        <div className={`${styles.head_col}  ${styles.head_input_search} `}>
          <input
            className={`${styles.head_input}`}
            placeholder="Bạn đang tìm việc gì?"
            value={keySearch}
            onChange={(e) => setKeySearch(e.target.value)}
          />

          <div className={styles.input_icon}>
            <p className={styles.sudoSearch}></p>
            <SearchIcon className={styles.searchIcon}></SearchIcon>
          </div>
        </div>
        <div className={`${styles.head_col}  ${styles.head_input_location} `}>
          <input
            className={`${styles.head_input} ${styles.head_checkAddress}`}
            placeholder="Địa điểm làm việc"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <div className={styles.input_icon}>
            <p className={`${styles.sudoLocation}`}></p>
            <FmdGoodIcon className={styles.searchIcon}></FmdGoodIcon>
          </div>
        </div>
        <div className={`${styles.head_col}  ${styles.wrapCheckbox} `}>
          <div
            onClick={() => setCheck(!check)}
            className={`${styles.containCheckbox} `}
          >
            <div className={styles.wrap_Checkbox}>
              <div className={styles.head_checkbox}></div>
              <div className={check ? `${styles.checkboxActive}` : ""}></div>
            </div>
            <label
              htmlFor="choose"
              className={`${styles.head__address} overflow-hidden`}
            >
              <h5 className={styles.head_title}>Tìm việc gần bạn</h5>
              <p className={styles.head_text}>
                (Áp dụng tại Hà Nội, TP.HCM, Bắc Ninh)
              </p>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.wrap_all}>
        <div className={`${styles.customRow} row`}>
          <div className={`${styles.wrap_border} col-lg-4 col-md-12`}>
            <Category
              category={uniqueArray(category)}
              address={uniqueArray(address)}
              industry={uniqueArray(industry)}
              timing={uniqueArray(timing)}
            />
          </div>

          <div className={`${styles.col_wrap} col-lg-8 col-md-12`}>
            <div className={`${styles.wrapListJob}`}>
              <div className={styles.head_listJob}>
                <div
                  className={`${styles.sortJob_sm} d-flex align-items-center justify-content-between`}
                >
                  <p className={styles.listJob_count}>
                    Tìm thấy{" "}
                    <span className={styles.higlight_text}>
                      {
                        data
                          .filter((e) =>
                            !jobIndex ? e : e.category === jobIndex
                          )
                          .filter((e) => (!major ? e : e.industry === major))
                          .filter((e) =>
                            !time_work ? e : e.time_work === time_work
                          )
                          .filter(
                            (ele) =>
                              ele.address.name
                                .toString()
                                .toLowerCase()
                                .indexOf(position.toString().toLowerCase()) !==
                              -1
                          )
                          .filter(
                            (ele) =>
                              ele.name
                                .toString()
                                .toLowerCase()
                                .indexOf(keySearch.toString().toLowerCase()) !==
                              -1
                          ).length
                      }
                    </span>{" "}
                    việc làm
                  </p>
                  <div
                    className={`${styles.wrap_selectSort} d-flex align-items-center`}
                  >
                    <p className={`${styles.sort__text} mb-0`}>Xếp theo:</p>
                    <div
                      className={`${styles.selectSort}`}
                      onClick={() => {
                        
                        setShow(!show);
                      }}
                    >
                      {sort === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-sort-alpha-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                          />
                          <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                        </svg>
                      ) : sort === 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className={`${styles.optionsItem}bi bi-sort-alpha-up-alt`}
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z" />
                          <path
                            fillRule="evenodd"
                            d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"
                          />
                          <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
                        </svg>
                      ) : sort === 2 ? (
                        <span style={{ fontWeight: 600 }}>Ngày hết hạn</span>
                      ) : (
                        <span style={{ fontWeight: 600 }}>Trạng thái</span>
                      )}

                      <ArrowDropDownIcon />
                    </div>
                    <div
                      className={clsx(styles.options, {
                        [styles.show]: show,
                      })}
                    >
                      <div
                        className={`${styles.optionsItem}`}
                        onClick={() => {
                          setSort(0);
                          setShow(false);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className={`bi bi-sort-alpha-down`}
                          viewBox="0 0 16 16"
                          style={sort === 0 ? { color: `#bf202e` } : {}}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                          />
                          <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                        </svg>
                      </div>
                      <div
                        className={`${styles.optionsItem}`}
                        onClick={() => {
                          setSort(1);
                          setShow(false);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className={`${styles.optionsItem}bi bi-sort-alpha-up-alt`}
                          viewBox="0 0 16 16"
                          style={sort === 1 ? { color: `#bf202e` } : {}}
                        >
                          <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z" />
                          <path
                            fillRule="evenodd"
                            d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"
                          />
                          <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
                        </svg>
                      </div>
                      <div
                        className={`${styles.optionsItem}`}
                        onClick={() => {
                          setSort(2);
                          setShow(false);
                        }}
                        style={
                          sort === 2
                            ? { color: `#bf202e`, fontWeight: 600 }
                            : { fontWeight: 600 }
                        }
                      >
                        Ngày hết hạn
                      </div>
                      <div
                        className={`${styles.optionsItem}`}
                        onClick={() => {
                          setSort(3);
                          setShow(false);
                        }}
                        style={
                          sort === 3
                            ? { color: `#bf202e`, fontWeight: 600 }
                            : { fontWeight: 600 }
                        }
                      >
                        Trạng thái
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.listJob_item}>
                {data
                  .filter((e) => (!jobIndex ? e : e.category === jobIndex))
                  .filter((e) => (!major ? e : e.industry === major))
                  .filter((e) => (!time_work ? e : e.time_work === time_work))
                  .filter(
                    (ele) =>
                      ele.address.name
                        .toString()
                        .toLowerCase()
                        .indexOf(position.toString().toLowerCase()) !== -1
                  )
                  .filter(
                    (ele) =>
                      ele.name
                        .toString()
                        .toLowerCase()
                        .indexOf(keySearch.toString().toLowerCase()) !== -1
                  )
                  .sortAlpha()
                  .map((job, index) => (
                    <div className={styles.JobLink_item} key={index}>
                      <JobItem
                        id={job.id}
                        key={index}
                        index={index}
                        name={job.name}
                        address={job.address.name}
                        salary={job.salary}
                        start={job.start}
                        end={job.deadline}
                        number={job.number}
                        cate={job.category}
                      />
                      {job.status}{" "}
                      {job.status === true ? (
                        <span className={styles.tag1}>Hot</span>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner_recruit}>
        <img className={styles.banner_foot} src={longBanner} alt="" />
        {/* <div className={styles.overlay}>
          <div className={`${styles.overlay_center} ${styles.overlay_title}`}>
            <h2 className={styles.banner_title}>Banner tuyển dụng</h2>
            <h2 className={styles.banner_title}> (Demo)</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default JobRecruits;
