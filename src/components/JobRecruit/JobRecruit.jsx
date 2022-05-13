import { useState, useContext, useEffect } from "react";
import styles from "./JobRecruit.module.css";
import { RecruitContext } from "../contexts/ContextRecuit";
import JobItem from "./JobItem";
import Category from "./Category";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import uniqueArray from "../extensions/uniqueArray";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import kinhdoanh from "../../assets/img/Job-Icon-svg/1kinhdoanh.svg";
import marketing from "../../assets/img/Job-Icon-svg/2marketing.svg";
import nhasanxuat from "../../assets/img/Job-Icon-svg/3nhasanxuat.svg";
import taichinh from "../../assets/img/Job-Icon-svg/4taichinh.svg";
import nhansu from "../../assets/img/Job-Icon-svg/5nhansu.svg";
import congnghe from "../../assets/img/Job-Icon-svg/6congnghe.svg";
import nhaphanphoi from "../../assets/img/Job-Icon-svg/7nhaphanphoi.svg";
import { useLocation, Link } from "react-router-dom";
import { toSlug } from "../extensions/toSlug";

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
    name: "Nhà sản xuất",
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

function JobRecruits() {
  const { keySearch, setKeySearch, data } = useContext(RecruitContext);

  const [position, setPosition] = useState("");
  const jobIndex = window.location.hash.split("#")[1];
  const search = useLocation().search;
  const jobName = new URLSearchParams(search).get("q");
  const jobLocation = new URLSearchParams(search).get("city");
  const major = new URLSearchParams(search).get("major");
const [check,setCheck] =useState(false)
  const [sort, setSort] = useState(true);
  useEffect(() => {

    if (jobName) {
      setKeySearch(jobName);
    }
    if (jobLocation) {
      setPosition(jobLocation);
    }
    // return () => {
    //   setPosition("");
    //   setKeySearch("");
    // };
    //eslint-disable-next-line
  }, []);

  // console.log(sort)
  //   const [dataSliced, setdataSliced] = useState([]);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   let PageSize = 10;
  //   useEffect(() => {
  //     if (data) {
  //       const firstPageIndex = (currentPage - 1) * PageSize;
  //       const lastPageIndex = firstPageIndex + PageSize;
  //       setdataSliced(data.slice(firstPageIndex, lastPageIndex));
  //     }
  //     const firstPageIndex = (currentPage - 1) * PageSize;
  //     const lastPageIndex = firstPageIndex + PageSize;
  //     return data.slice(firstPageIndex, lastPageIndex);
  //   }, [data, currentPage]);
  Array.prototype.sortAlpha = function (sort) {
    return sort ? this.sort() : this.reverse()
  }
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

  data &&
    data.forEach((job) => {
      category.push(job.category);
      address.push(job.address.name);
      industry.push(job.industry);
    });

  // const handlSort = () => {
  //   setSort("alpha")
  //   if (sort === "alpha") {
  //     setSort("reverse")
  //   }
  // };
  return (
    <div
      className={`container ${styles.customContainer}`}
    >
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
          <div className={`${styles.containCheckbox} `}>
            <div 
            onClick={()=>setCheck(!check)}
            className={styles.wrap_Checkbox}>
              <div className={styles.head_checkbox}>

              </div>
              <div className={ check ?`${styles.checkboxActive}`:""}>

              </div>
            </div>
            <label htmlFor="choose" className={`${styles.head__address} overflow-hidden`}>
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
                          .filter((ele) =>
                            jobLocation
                              ? ele.address.name
                                .toString()
                                .toLowerCase()
                                .indexOf(
                                  position.toString().toLowerCase()
                                ) !== -1
                              : ele
                          )
                          .filter(
                            (ele) =>
                              ele.name.name
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
                  ><i class="bi bi-sort-alpha-down"></i>
                    <p className={`${styles.sort__text} mb-0`}>Xếp theo:</p>
                    <span
                      className={styles.clickSort}
                      onClick={() => setSort(!sort)}
                    >

                      {
                        sort ?
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sort-alpha-up-alt" viewBox="0 0 16 16">
                            <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z" />
                            <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z" />
                            <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
                          </svg>
                          :
                          <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
                            <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                          </svg>
                      }

                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.listJob_item}>
                {data
                  .filter((e) => (!jobIndex ? e : e.category === jobIndex))
                  .filter((e) => (!major ? e : e.industry === major))
                  .filter((ele) =>
                    jobLocation
                      ? ele.address.name
                        .toString()
                        .toLowerCase()
                        .indexOf(position.toString().toLowerCase()) !== -1
                      : ele
                  )
                  .filter(
                    (ele) =>
                      ele.name.name
                        .toString()
                        .toLowerCase()
                        .indexOf(keySearch.toString().toLowerCase()) !== -1
                  )
                  .sortAlpha(sort).map((job, index) => (
                    (<Link className={styles.JobLink_item}
                      to={{
                        pathname: `/tuyen-dung/${toSlug(job.name.name)}`,
                        search: `#${index}#${job.id}`,
                      }}
                      key={index}
                    >
                      <JobItem
                        id={job.id}
                        key={index}
                        index={index}
                        name={job.name.name}
                        address={job.address.name}
                        salary={job.salary}
                        start={job.start}
                        end={job.deadline}
                        number={job.number}
                        cate={job.category}
                      />
                    </Link>)
                  ))}
              </div>
              {/* <Pagination
                      className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={data.length}
                    pageSize={10}
                    onPageChange={(page) => setCurrentPage(page)}
                /> */}

              {/* <div
                className={`${styles.pagination} d-flex align-items-center justify-content-center`}
              >
                <KeyboardArrowLeftIcon
                  className={styles.btn_pagi}
                ></KeyboardArrowLeftIcon>
                <p className={`${styles.btn_pagi} ${styles.btn_pagiActive}`}>
                  1
                </p>
                <p className={styles.btn_pagi}>2</p>
                <p className={styles.btn_pagi}>3</p>
                <p className={styles.btn_pagi}>4</p>
                <p className={styles.btn_pagi}>5</p>
                <p className={styles.btn_pagi}>...</p>
                <p className={styles.btn_pagi}>29</p>
                <p className={styles.btn_pagi}>30</p>
                <ChevronRightIcon
                  className={styles.btn_pagi}
                ></ChevronRightIcon>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner_recruit}>
        <img
          className={styles.banner_foot}
          src="https://hdwallsource.com/img/2014/8/keyboard-background-38996-39892-hd-wallpapers.jpg"
          alt=""
        />
        <div className={styles.overlay}>
          <div className={`${styles.overlay_center} ${styles.overlay_title}`}>
            <h2 className={styles.banner_title}>Banner tuyển dụng</h2>
            <h2 className={styles.banner_title}> (Demo)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobRecruits;
