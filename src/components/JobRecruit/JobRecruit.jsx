import { useState, useContext, useEffect } from "react";
import styles from "./JobRecruit.module.css";
import { RecruitContext } from "../contexts/ContextRecuit";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import uniqueArray from "../extensions/uniqueArray";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import kinhdoanh from "../../assets/img/Job-Icon-svg/1kinhdoanh.svg";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import marketing from "../../assets/img/Job-Icon-svg/2marketing.svg";
import nhasanxuat from "../../assets/img/Job-Icon-svg/3nhasanxuat.svg";
import taichinh from "../../assets/img/Job-Icon-svg/4taichinh.svg";
import nhansu from "../../assets/img/Job-Icon-svg/5nhansu.svg";
import congnghe from "../../assets/img/Job-Icon-svg/6congnghe.svg";
import nhaphanphoi from "../../assets/img/Job-Icon-svg/7nhaphanphoi.svg";
import banner1 from "../../assets/img/Vacancies/banner2.png";
import Pagination from "../extensions/Pagination/Pagination";
import { Link} from "react-router-dom";
import { toSlug } from "../extensions/toSlug";
import { formatDate } from "../extensions/formatDate";
import formatNumber from "../extensions/formatNumber";
import { searchData } from "../extensions/searchData";

const jobCategory = [
  {
    img: marketing,
    short: "marketing",
  },
  {
    img: kinhdoanh,
    short: "kinhdoanh",
  },
  {
    img: nhasanxuat,
    short: "nhasanxuat",
  },
  {
    img: taichinh,
    short: "taichinh",
  },
  {
    img: nhansu,
    short: "nhansu",
  },
  {
    img: congnghe,
    short: "congnghe",
  },
  {
    img: nhaphanphoi,
    short: "nhaphanphoi",
  },
];

function JobRecruits() {
  const { keySearch, setKeySearch, data, targetSearch } =
    useContext(RecruitContext);
  console.log(keySearch);

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
  const department = [];
  const address = [];
  data &&
    data.forEach((job) => {
      department.push(job.department.name);
      address.push(job.address.name);
    });
  console.log(data);
  return (
    <div
      className={`container ${styles.customContainer}`}
      style={{ marginTop: "18rem" }}
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
          {data.length > 0 &&
            searchData(data, targetSearch, keySearch).length === 0 && (
              <p
                className={"mt-2 ms-2 position-absolute"}
                style={{
                  bottom: "-40px",
                  color: "red",
                  fontSize: ".9rem",
                  fontWeight: "500",
                }}
              >
                <i>*Không tìm thấy công việc</i>
              </p>
            )}
          <div className={styles.input_icon}>
            <p className={styles.sudoSearch}></p>
            <SearchIcon className={styles.searchIcon}></SearchIcon>
          </div>
        </div>
        <div className={`${styles.head_col}  ${styles.head_input_location} `}>
          <input
            className={`${styles.head_input} ${styles.head_checkAddress}`}
            placeholder="Địa điểm làm việc"
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
              department={uniqueArray(department)}
              address={uniqueArray(address)}
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
                    <span className={styles.higlight_text}>{data.length}</span>{" "}
                    việc làm
                  </p>
                  <div
                    className={`${styles.wrap_selectSort} d-flex align-items-center`}
                  >
                    <p className={`${styles.sort__text} mb-0`}>Xếp theo:</p>
                    <select className={styles.priority}>
                      <option value="">Độ ưu tiên</option>
                      <option value="">Xếp theo </option>
                      <option value="">Xếp theo </option>
                      <option value="">Xếp theo </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.listJob_item}>
                {console.log(searchData(data, targetSearch, keySearch))}
                {data &&
                  data.map((job, index) => (
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
function JobItem({
  id,
  name,
  address,
  salary,
  start,
  end,
  index,
  number,
  cate,
  lenght,
}) {
  const [active, setActive] = useState(false);

  const imgs = jobCategory.find((jobcate) => jobcate.short === cate).img;

  return (
    <>
      <div
        className={
          active
            ? `${styles.warpItem} ${styles.active_item}`
            : `${styles.warpItem}`
        }
        onMouseOut={(e) => setActive(false)}
        onMouseOver={(e) => setActive(true)}
      >
        <div className={`${styles.head_item} d-flex align-items-center`}>
          <div className={styles.warpIcon_job}>
            <img
              className={styles.icon_job}
              src={imgs || jobCategory[0].img}
              alt="/"
            />
          </div>
          <div className="overflow-hidden">
            <h5 className={styles.title_job}>
              {index + 1}. {name}{" "}
            </h5>
            <p className={`${styles.text_job} `}>
              Số lượng {number} người{" "}
              <span className={styles.spaceCount}>|</span> Nơi làm việc:{" "}
              {address}
            </p>
            <p className={`${styles.text_job} ${styles.text_price}`}>
              <AttachMoneyIcon
                className={`${styles.money_icon} rounded-circle`}
              ></AttachMoneyIcon>{" "}
              {salary == "ltt"
                ? `Lương thỏa thuận`
                : `${formatNumber(
                    salary.split(" - ")[0].slice(0, -4),
                    0,
                    ",",
                    "."
                  )} -
                           ${formatNumber(
                             salary.split(" - ")[1].slice(0, -4),
                             0,
                             ",",
                             "."
                           )}
                            
                            ++VNĐ`}
            </p>
          </div>
        </div>
        <div className={styles.foot_item}>
          <div
            className={`d-flex justify-content-between align-items-center ${styles.foot_text}`}
          >
            <p className={`${styles.text_job} ${styles.text_jobStart}`}>
              Ngày đăng tuyển {formatDate(start, "-", "/")}
            </p>

            <p className={`${styles.text_job} ${styles.text_jobEnd}`}>
              <span className={styles.foot_space}> | </span>
              Ngày hết hạn {formatDate(end, "-", "/")}
            </p>
            <div className={`${styles.containApply}`}>
              <Link
                className={styles.apply_job}
                to={{
                  pathname: `/tuyen-dung/${toSlug(name)}`,
                  search: `#${index}#${id}`,
                }}
              >
                Ứng tuyển ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Category({ department, address }) {
  const [job, setJob] = useState(0);
  return (
    <div className={`${styles.wrapCategory}`}>
      <Accordion>
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo phòng ban
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography className={styles.ul_listFilterbot}>
            {department.map((depar, index) => (
              <li key={index} className={styles.filter_item}>
                <a
                  onClick={(e) => setJob(index)}
                  href="#"
                  className={
                    job === index
                      ? `${styles.filter_text} ${styles.ftActive}`
                      : `${styles.filter_text}`
                  }
                >
                  {depar}
                </a>
              </li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo vi trí địa lý
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography className={styles.ul_listFilterbot}>
            {address.map((depar, index) => (
              <li key={index} className={styles.filter_item}>
                <a href="/" className={styles.filter_text}>
                  {depar}
                </a>
              </li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo chuyên môn
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.ul_listFilterbot}>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo thời gian
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.ul_listFilterbot}>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div to="/ung-tuyen-nang-luc" className={styles.joinJob}>
        <Link to="/ung-tuyen-nang-luc">
          <h4 className={styles.joinText}>Ứng tuyển </h4>
          <h4 className={styles.joinText}>theo chuyên môn</h4>
        </Link>
      </div>
      <div className={styles.wrap_banner}>
        <img className={styles.banner_cate} src={banner1} alt="/" />
        <div className={styles.overlay}>
          <div className={styles.overlay_center}>
            <h5>Banner tuyển TTS</h5>
            <h5> (Demo)</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobRecruits;
