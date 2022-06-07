import styles from "./Vancancies.module.css";
import { useState, useContext } from "react";
// import formatNumber from "../extensions/formatNumber";
import kinhdoanh from "../../assets/img/Vacancies/Kinh-doanh.svg";
import marketing from "../../assets/img/Vacancies/Marketing.svg";
import nhasanxuat from "../../assets/img/Vacancies/San-xuat.svg";
import taichinh from "../../assets/img/Vacancies/Tai-chinh.svg";
import nhansu from "../../assets/img/Vacancies/Nhan-su.svg";
import congnghe from "../../assets/img/Vacancies/Ban-cong-nghe.svg";
import nhaphanphoi from "../../assets/img/Vacancies/Nha-phan-phoi.svg";
import { RecruitContext } from "../contexts/ContextRecuit";
import { toSlug } from "../extensions/toSlug";
import { Link } from "react-router-dom";
function Vancancies() {
  const [active] = useState(false);
  const { data } = useContext(RecruitContext);

  const jobCategory = [
    {
      img: kinhdoanh,
      short: "kinhdoanh",
    },
    {
      img: marketing,
      short: "marketing",
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
  return (
    <div className={styles.Vancancies}>
      <div className="container">
        <h3 className={styles.title}>Vị trí tuyển dụng nổi bật</h3>
        <div className={`row`}>
          {data &&
            data
              .filter((e) => e.status === true)
              .map((vancancies, index) => (
                index < 9 && (<Link
                  key={index}
                  to={{
                    pathname: `/tuyen-dung/${toSlug(vancancies.name)}`,
                    search: `#${index}#${vancancies.id}`
                  }}
                  className={
                    active
                      ? `${styles.containerItem} ${styles.active} col-sm-6 col-md-6 col-lg-4`
                      : `${styles.containerItem}  col-sm-6 col-md-6 col-lg-4`
                  }
                >

                  <div className={`${styles.vancanciesGroup} d-flex`}>
                    <div className={styles.containerImage}>
                      {jobCategory.map((e, index) => {
                        if (e.short === vancancies.category) {
                          return (
                            <img
                              key={index}
                              className={styles.vancancieImage}
                              src={e.img}
                              alt={vancancies.vancanies}
                            />
                          );
                        }
                        else {
                          return false;
                        }
                      })}
                    </div>
                    <div className={styles.vancanciesText}>
                      <h4 className={styles.vancancieTitle}>
                        {vancancies.name}
                      </h4>
                      <p className={styles.vancancieAddress}>
                        Tại: {vancancies.address.name}
                      </p>
                      <p className={styles.vancancieSalary}>
                        {/* {formatNumber(vancancies.minSalary, 0, ",", ".")} -{" "} */}
                        {console.log(vancancies.salary)}
                        {vancancies.salary[0] !== "ltt" ? (
                          <>
                            Từ{" "}
                            {
                              (vancancies.salary.split(" - ")[0].slice(0, -4) * 23000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                            }{" "}
                            -
                            {" "}
                            {
                              (vancancies.salary.split(" - ")[1].slice(0, -4) * 23000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                            }{" "}
                            ++VNĐ

                          </>
                        ) : (
                          "Lương thoả thuận"
                        )}
                      </p>
                    </div>
                  </div>
                </Link>)
              ))}
        </div>
        <div className={styles.overlay}>
          <button className={styles.vancanciesBtn}>
            <Link to="/tuyen-dung">Xem thêm</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vancancies;
