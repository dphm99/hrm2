import React, { useState, useEffect, useContext } from "react";
import styles from "./JobBox.module.css";
import kinhdoanh from "../../assets/img/Job-Icon-svg/1kinhdoanh.svg";
import marketing from "../../assets/img/Job-Icon-svg/2marketing.svg";
import nhasanxuat from "../../assets/img/Job-Icon-svg/3nhasanxuat.svg";
import taichinh from "../../assets/img/Job-Icon-svg/4taichinh.svg";
import nhansu from "../../assets/img/Job-Icon-svg/5nhansu.svg";
import congnghe from "../../assets/img/Job-Icon-svg/6congnghe.svg";
import nhaphanphoi from "../../assets/img/Job-Icon-svg/7nhaphanphoi.svg";
import { Link } from "react-router-dom";
import { toSlug } from "../extensions/toSlug";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { RecruitContext } from "../contexts/ContextRecuit";

function JobBox() {
  const { data } = useContext(RecruitContext);

  const [active, setActive] = useState(0);
  const [category, setCategory] = useState("office");
  const jobCategory = [
    {
      img: kinhdoanh,
      name: "Kinh doanh",
      quantity: "100 việc làm",
      short: "office",
    },
    {
      img: marketing,
      name: "Marketing",
      quantity: "100 việc làm",
      short: "office",
    },
    {
      img: nhasanxuat,
      name: "Sản xuất",
      quantity: "100 việc làm",
      short: "factory",
    },
    {
      img: taichinh,
      name: "Tài chính",
      quantity: "100 việc làm",
      short: "office",
    },
    {
      img: nhansu,
      name: "Nhân sự",
      quantity: "100 việc làm",
      short: "office",
    },
    {
      img: congnghe,
      name: "Công nghệ",
      quantity: "100 việc làm",
      short: "office",
    },
    {
      img: nhaphanphoi,
      name: "Nhà phân phối",
      quantity: "100 việc làm",
      short: "inventory",
    },
  ];

  return (
    <div className={`${styles.jobRef} container-xl`}>
      <div className={styles.title}>
        <h3>Việc làm theo phòng ban</h3>
      </div>
      <div className={styles.jobCategory}>
        <ul className={styles.jobCategoryGroup}>
          {jobCategory.map((e, index) => (
            <li
              key={index}
              className={
                active === index
                  ? `${styles.jobCategoryItem} ${styles.active}`
                  : `${styles.jobCategoryItem}`
              }
              onClick={() => {
                setActive(index);
                setCategory(e.short);
              }}
            >
              <img src={e.img} alt="" className={styles.jobCategoryImg} />
              <div className={styles.jobCategoryName}>{e.name}</div>
              <div className={styles.jobCategoryQuantity}>{e.quantity}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.jobListItem}>
        <div className={`row`}>
          {data &&
            data
              .filter((e) => e.category === category)
              .map((value, index) => {
                if (index < 9) {
                  return (
                    <Link
                      key={index}
                      to={{
                        pathname: `/ung-tuyen/${toSlug(value.name.name)}`,
                        search: `#${value.id}`,
                      }}
                      className={`${styles.JobList} col-lg-4 col-md-6 col-sm-12`}

                    >
                      <div className={`${styles.jobListTitle}`} >
                        <h5 style={{ display: `flex` }}>
                          <ArrowRightIcon />
                          {value.name.name} ({value.number} vị trí)
                        </h5>
                      </div>

                    </Link>
                  );
                }
              })}
        </div>
      </div>
    </div>
  );
}
// function JobList(props) {
//   return (
//     <div
//       key={props.index}
//       className={`${styles.JobList} col-lg-4 col-md-6 col-sm-12`}
//     >
//       <div className={styles.jobListTitle}>
//         <h5>
//           <ArrowRightIcon />
//           {props.title} ({props.quantity} vị trí) ...
//         </h5>
//       </div>
//     </div>
//   );
// }

export default JobBox;
