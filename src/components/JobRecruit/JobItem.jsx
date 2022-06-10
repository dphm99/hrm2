import { useState } from "react";
import { Link } from "react-router-dom";
import { toSlug } from "../extensions/toSlug";
import { formatDate } from "../extensions/formatDate";
import formatNumber from "../extensions/formatNumber";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import kinhdoanh from "../../assets/img/Vacancies/Kinh-doanh.svg";
import marketing from "../../assets/img/Vacancies/Marketing.svg";
import nhasanxuat from "../../assets/img/Vacancies/San-xuat.svg";
import taichinh from "../../assets/img/Vacancies/Tai-chinh.svg";
import nhansu from "../../assets/img/Vacancies/Nhan-su.svg";
import congnghe from "../../assets/img/Vacancies/Ban-cong-nghe.svg";
import nhaphanphoi from "../../assets/img/Vacancies/Nha-phan-phoi.svg";
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
  ento,
}) {
  const [active, setActive] = useState(false);
  // const [disable, setDisable] = useState(false)
  const imgs = jobCategory.find((jobcate) => jobcate.short === cate).img;
  // const [catetory, setCatetory] = useState(false)

  function checkDate(e) {
    var today = new Date();
    var end = new Date(e);
    if (today > end) {
      return false;
    } else {
      return true;
    }
  }

  function checkToday(e) {
    var today = new Date();
    var start = new Date(e);
    if ((today - start) / (1000 * 3600 * 24) > 14) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      {
        <Link
          to={{
            pathname: `/tuyen-dung/${toSlug(name)}`,
            search: `#${index}#${id}`,
          }}
          className={
            active
              ? `${styles.wrapItem} ${styles.active_item}`
              : `${styles.wrapItem}`
          }
          onMouseOut={(e) => {
            checkDate(end) && setActive(false);
          }}
          onMouseOver={(e) => {
            checkDate(end) && setActive(true);
          }}
        >
          <div className={`${styles.head_item} d-flex align-items-center`}>
            {checkToday(start) && <span className={styles.tag}>New</span>}

            <div className={styles.wrapIcon_job}>
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
                  : salary && salary[0] === "lct"
                  ? "Lương cạnh tranh"
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
                    )} ${salary.split(" - ")[1].slice(-4)}`}
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

              <span className={styles.foot_space}> | </span>
              <p
                className={`${styles.text_job} ${styles.text_jobEnd}`}
                style={{ color: `red` }}
              >
                Ngày hết hạn {formatDate(end, "-", "/")}
              </p>
              <div className={`${styles.containApply}`}>
                {start ? (
                  checkDate(end) ? (
                    <Link
                      className={styles.apply_job}
                      to={{
                        pathname: `/tuyen-dung/${toSlug(name)}`,
                        search: `#${index}#${id}`,
                      }}
                    >
                      Ứng tuyển ngay
                    </Link>
                  ) : (
                    <div className={styles.btnDeadline}>Hết hạn nộp cv</div>
                  )
                ) : (
                  <div className={styles.btnDeadline}>Chưa đăng tuyển</div>
                )}
              </div>
            </div>
          </div>
        </Link>
      }
    </>
  );
}

export default JobItem;
