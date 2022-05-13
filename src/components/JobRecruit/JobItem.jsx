import { useState } from "react";
import { Link } from "react-router-dom";
import { toSlug } from "../extensions/toSlug";
import { formatDate } from "../extensions/formatDate";
import formatNumber from "../extensions/formatNumber";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import kinhdoanh from "../../assets/img/Job-Icon-svg/1kinhdoanh.svg";
import marketing from "../../assets/img/Job-Icon-svg/2marketing.svg";
import nhasanxuat from "../../assets/img/Job-Icon-svg/3nhasanxuat.svg";
import taichinh from "../../assets/img/Job-Icon-svg/4taichinh.svg";
import nhansu from "../../assets/img/Job-Icon-svg/5nhansu.svg";
import congnghe from "../../assets/img/Job-Icon-svg/6congnghe.svg";
import nhaphanphoi from "../../assets/img/Job-Icon-svg/7nhaphanphoi.svg";
import styles from "./JobRecruit.module.css";

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
    short: "factory",
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
  {
    img: nhaphanphoi,
    short: "south",
  },
];

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
            <img className={styles.icon_job} src={imgs} alt="/" />
          </div>
          <div className="overflow-hidden">
            <h5 className={styles.title_job}>
              {index + 1}. {name}{" "}
            </h5>
            <div className={`${styles.text_job} `}>
              <span className={styles.job_quantity}>
                Số lượng {number} người{" "}
              </span>
              <span className={styles.spaceCount}>|</span>
              <span className={styles.job_address}>
                Nơi làm việc: {address}
              </span>
            </div>
            <p className={`${styles.text_job} ${styles.text_price}`}>
              <AttachMoneyIcon
                className={`${styles.money_icon} rounded-circle`}
              ></AttachMoneyIcon>{" "}
              {salary && salary[0] === "ltt"
                ? `Lương thỏa thuận`
                : `${formatNumber(
                    salary.split(" - ")[0].slice(0, -4),
                    0,
                    ",",
                    "."
                  )} - ${formatNumber(
                    salary.split(" - ")[1].slice(0, -4),
                    0,
                    ",",
                    "."
                  )} ${(salary.split(" - ")[1].slice(-4))}`}
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

export default JobItem;
