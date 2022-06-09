import React, { useState, useContext } from "react";
import styles from "./JobBox.module.css";
import kinhdoanh from "../../assets/img/Vacancies/Kinh-doanh.svg";
import marketing from "../../assets/img/Vacancies/Marketing.svg";
import nhasanxuat from "../../assets/img/Vacancies/San-xuat.svg";
import taichinh from "../../assets/img/Vacancies/Tai-chinh.svg";
import nhansu from "../../assets/img/Vacancies/Nhan-su.svg";
import congnghe from "../../assets/img/Vacancies/Ban-cong-nghe.svg";
import nhaphanphoi from "../../assets/img/Vacancies/Nha-phan-phoi.svg";

import { Link } from "react-router-dom";
import { toSlug } from "../extensions/toSlug";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { RecruitContext } from "../contexts/ContextRecuit";

function JobBox() {
  const { data } = useContext(RecruitContext);

  const [active, setActive] = useState(0);
  const [category, setCategory] = useState("kinhdoanh");
  const jobCategory = [
    {
      img: kinhdoanh,
      name: "Kinh doanh",
      quantity: "100 việc làm",
      short: "kinhdoanh",
    },
    {
      img: marketing,
      name: "Marketing",
      quantity: "100 việc làm",
      short: "marketing",
    },
    {
      img: nhasanxuat,
      name: "Sản xuất",
      quantity: "100 việc làm",
      short: "nhasanxuat",
    },
    {
      img: taichinh,
      name: "Tài chính",
      quantity: "100 việc làm",
      short: "taichinh",
    },
    {
      img: nhansu,
      name: "Nhân sự",
      quantity: "100 việc làm",
      short: "nhansu",
    },
    {
      img: congnghe,
      name: "Công nghệ",
      quantity: "100 việc làm",
      short: "congnghe",
    },
    {
      img: nhaphanphoi,
      name: "Nhà phân phối",
      quantity: "100 việc làm",
      short: "nhaphanphoi",
    },
  ];

  return (
    <div className={`${styles.jobRef} container-xl`}>
      <div className={styles.title}>
        <h3>Việc làm theo phòng ban</h3>
      </div>
      <div className={styles.jobCategory}>
        <ul className={styles.jobCategoryGroup}>
          {data &&
            jobCategory.map((e, index) => (
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
                <div className={styles.jobCategoryQuantity}>
                  {data.filter((ele) => ele.category === e.short).length} việc
                  làm
                </div>
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
                        pathname: `/tuyen-dung/${toSlug(value.name)}`,
                        search: `#${index}#${value.id}`,
                      }}
                      className={`${styles.JobList} col-lg-4 col-md-6 col-sm-12`}
                    >
                      <div className={`${styles.jobListTitle}`}>
                        <h5 style={{ display: `flex` }}>
                          <ArrowRightIcon />
                          {value.name} ({value.number} vị trí)
                        </h5>
                      </div>
                    </Link>
                  );
                }
                else {
                  return false;
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
