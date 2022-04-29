import React, { useState } from "react";
import styles from "./JobBox.module.css";
import kinhdoanh from "../../assets/img/Job-Icon-svg/1kinhdoanh.svg";
import marketing from "../../assets/img/Job-Icon-svg/2marketing.svg";
import nhasanxuat from "../../assets/img/Job-Icon-svg/3nhasanxuat.svg";
import taichinh from "../../assets/img/Job-Icon-svg/4taichinh.svg";
import nhansu from "../../assets/img/Job-Icon-svg/5nhansu.svg";
import congnghe from "../../assets/img/Job-Icon-svg/6congnghe.svg";
import nhaphanphoi from "../../assets/img/Job-Icon-svg/7nhaphanphoi.svg";

const JobItem = (props) => {
  const [active, setActive] = useState(0);

  return (
    <li
      className={
        active === props.index ? `${styles.jobCategoryItem} ${styles.active}` : `${styles.jobCategoryItem}`
      }
      onClick={() => setActive(props.index)}
    >
      <img src={props.img} alt="" className={styles.jobCategoryImg} />
      <div className={styles.jobCategoryName}>{props.name}</div>
      <div className={styles.jobCategoryQuantity}>{props.quantity}</div>
    </li>
  );
};
const jobCategory = [
  {
    img: kinhdoanh,
    name: "Kinh doanh",
    quantity: "100 việc làm",
  },
  {
    img: marketing,
    name: "Marketing",
    quantity: "100 việc làm",
  },
  {
    img: nhasanxuat,
    name: "Sản xuất",
    quantity: "100 việc làm",
  },
  {
    img: taichinh,
    name: "Tài chính",
    quantity: "100 việc làm",
  },
  {
    img: nhansu,
    name: "Nhân sự",
    quantity: "100 việc làm",
  },
  {
    img: congnghe,
    name: "Công nghệ",
    quantity: "100 việc làm",
  },
  {
    img: nhaphanphoi,
    name: "Nhà phân phối",
    quantity: "100 việc làm",
  },
];

function JobBox() {
  return (
    <div className="container">
      <div className={styles.title}>
        <h3>Việc làm theo phòng ban</h3>
      </div>
      <div className={styles.jobCategory}>
        <ul className={styles.jobCategoryGroup}>
          {jobCategory.map((e, index) => (
            <JobItem
              index={index}
              key={index}
              img={e.img}
              name={e.name}
              quantity={e.quantity}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobBox;
