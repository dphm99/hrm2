import React from "react";
import styles from "./Career.module.css";
// import {Link} from "re"
function Career() {
  const cardList = [
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
  ];

  const CardItem = (props) => {
    return (
      <div class="col">
        <div className={styles.Career__card}>
          <div className={styles.Career__img}>
            <div>
              <div className={styles.Career_imge}>
                <img src={props.src} alt="" />
              </div>
            </div>
          </div>

          <div className>
            <div className={styles.Career__titlename}>
            <h5 className={styles.Career__title}>Cách để viết CV</h5>
            </div>
            <div className={styles.Career__tikitiki}>
            <p className={styles.Career__tiki} maxlength="2">
              {props.text}
              {/* <h8 className={styles.Career__h8}>Đọc thêm</h8> */}
            </p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container">
        <div className={styles.Career__h4}>
          <h4>ĐỊNH HƯỚNG NGHỀ NGHỆP</h4>
        </div>
        <div class="row">
          {cardList.map((e, index) => {
            return <CardItem src={e.img} text={e.text} key={index} />;
          })}
        </div>
      </div>
      <div className={styles.Career__banner}>
        <img src="https://dulichvietnam.com.vn/du-lich-anh/wp-content/uploads/2020/04/ngon-ngu-anh-1.jpg" />
      </div>
    </div>
  );
}

export default Career;
