import React, { useState } from "react";
import styles from "./FormRecruit.module.css";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import axios from "axios";
import FormData from "form-data"

function FormRecruit() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [cv, setCv] = useState([]);
  const onChange = (e) => {
    // console.log("attachment", e.target.files[0]);
    setCv([e.target.files[0]]);
    // console.log(cv);
  };

  const handleLogin = () => {
    const bodyFormData = new FormData();
    const cvv = document.querySelector("#file").files[0];
    console.log(cvv);
    bodyFormData.append("user", "2");
    bodyFormData.append("job_id", 2038);
    bodyFormData.append("job_name", "Chuyên viên mua hàng bao bì, NL, POSM");
    bodyFormData.append("name", name);
    bodyFormData.append("phone", phone);
    bodyFormData.append("email", email);
    bodyFormData.append("cv", cvv);
    console.log(bodyFormData);
    axios({
      method: "POST",
      url: "http://test.diligo.vn:15000/api/v1/recruitment/apply",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        alert(response,"Ban da ung tuyen thanh cong");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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
      <div className="container" style={{ margin: "286px auto 90px" }}>
        <Breadcrumbs separator=">" breadItem={breadcrumItem} />
        <div style={{ textAlign: "center" }} className={styles.Recruit}>
          <h3>Bạn đang ứng tuyển vị trí</h3>
          <h4 className={styles.jobTitle}>
            Nhân viên kinh doanh (Nhãn hàng Lipzo)
          </h4>
          <div className={styles.formRecruit}>
            <form encType="multipart/form-data">
              <div className={styles.inputName}>
                <label htmlFor="inputName" className={styles.inputLabel}>
                  Họ và tên đầy đủ
                </label>
                <input
                  type="text"
                  id="inputName"
                  name="fullname"
                  className={styles.inputField}
                  onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setPhone(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin}
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
