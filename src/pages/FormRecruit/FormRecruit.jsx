import React from "react";
import styles from "./FormRecruit.module.css";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";

function FormRecruit() {
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/ung-tuyen",
      title: "Ứng tuyển",
      isActive: true,
    },
  ];
  return (
    <>
      <Header2 />
      <div className="container" style={{ margin: "12rem auto" }}>
        <Breadcrumbs separator=">" breadItem={breadcrumItem} />
        <div style={{ textAlign: "center" }} className={styles.Recruit}>
          <h3>Bạn đang ứng tuyển vị trí</h3>
          <h4 className={styles.jobTitle}>
            Nhân viên kinh doanh (Nhãn hàng Lipzo)
          </h4>
          <div className={styles.formRecruit}>
            <form>
              <div className={styles.inputName}>
                <label htmlFor="inputName" className={styles.inputLabel}>
                  Họ và tên đầy đủ
                </label>
                <input
                  type="text"
                  id="inputName"
                  name="fullname"
                  className={styles.inputField}
                  required
                />
              </div>
              <div className={`${styles.inputWrapper}`}>
                <div className={styles.inputLeft}>
                  <label htmlFor="inputPhone" className={styles.inputLabel}>
                    Số điện thoại
                  </label>
                  <input
                    type="phone"
                    id="inputPhone"
                    name="phone"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.inputRight}>
                  <label htmlFor="inputEmail" className={styles.inputLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    name="email"
                    className={styles.inputField}
                    required
                  />
                </div>
              </div>
              <div className={styles.inputFile}>
                <input
                  type="file"
                  id="file"
                  className={styles.inputFile}
                  name="file"
                  required
                />
              </div>
              <button
                type="submit"
                className={`${styles.buttonSubmit} ${styles.active}`}
              >
                Gửi CV
              </button>
              <div>
                Không có CV, <a href="/">Tải ngay</a>
              </div>
              <button className={styles.noCV}>
                Tải CV tiêu chuẩn của Diligo
              </button>
              <div className={styles.desc}>
                <ul>
                  Lưu ý khi đăng CV
                  <li>
                    1. Chỉ đăng tải file CV dưới dạng PDF, có kích thước không
                    vượt 100mb
                  </li>
                  <li>2. Lưu tên cần đảm bảo thực hiện theo thứ tự:</li>
                  <p className="text-center">
                    CV_[Tên vị trí ứng tuyển]_Họ tên đầy đủ
                  </p>
                  <p className="text-center">Ví dụ: CV_TPHCNS_Nguyễn Văn A</p>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormRecruit;
