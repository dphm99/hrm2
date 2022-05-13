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

  const [sort, setSort] = useState([]);
  useEffect(() => {
    if (sort.length === 0) {
      setSort(data);
    }
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

  const handlSort = (value, key) => {
    switch (value) {
      case "status":
        const sorts = sort?.filter((job) => job.status === true);
        const statusFalse = sort?.filter((job) => job.status === "");
        const newStatus = [...sorts, ...statusFalse];
        setSort((prev) => newStatus);
        break;

      default:
        break;
    }
  };
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
            <input type="checkbox" className={styles.head_checkbox} />
            <div className={`${styles.head__address} overflow-hidden`}>
              <h5 className={styles.head_title}>Tìm việc gần bạn</h5>
              <p className={styles.head_text}>
                (Áp dụng tại Hà Nội, TP.HCM, Bắc Ninh)
              </p>
            </div>
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
                  >
                    <p className={`${styles.sort__text} mb-0`}>Xếp theo:</p>
                    <select
                      onChange={(e) => handlSort(e.target.value)}
                      className={styles.priority}
                    >
                      <option value="">Xếp theo </option>
                      <option value="status">Độ ưu tiên</option>
                    </select>
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
                  .map((job, index) => (
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
