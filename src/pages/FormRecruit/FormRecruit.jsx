import React, { useState, useContext, useRef, useEffect } from "react";
import styles from "./FormRecruit.module.css";
import Header2 from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import axios from "axios";
import FormData from "form-data";
import { RecruitContext } from "../../components/contexts/ContextRecuit";
import filesCV from "../../assets/files/CV Diligo Holdings.doc";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

function FormRecruit() {
  const { data } = useContext(RecruitContext);
  const history = useHistory();

  // const Index = window.location.hash.split("#")[1];
  const jobId = window.location.hash.split("#")[2];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fileName, setFileName] = useState("");
  console.log(data);

  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    /*Selected files data can be collected here.*/
    setFileName(e.target.files[0].name);
  };
  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };
  // React.useEffect(() => {
  //   if(name !== '' && phone !=="" && email!=="") {
  //     handleLogin()
  //   }
  // },[])

  const handleLogin = () => {
    const bodyFormData = new FormData();
    const cvv = document.querySelector("#file").files[0];
    console.log(cvv.name);
    bodyFormData.append("user", "2");
    bodyFormData.append("job_id", jobId);
    bodyFormData.append(
      "job_name",
      data.find((ele) => ele.id === Number(jobId)) &&
        data.find((ele) => ele.id === Number(jobId)).name.name
    );
    bodyFormData.append("name", name);
    bodyFormData.append("phone", phone);
    bodyFormData.append("email", email);
    bodyFormData.append("cv", cvv);
    // console.log(bodyFormData);
    if (name !== "" && phone !== "" && email !== "" && cvv !== undefined) {
      axios({
        method: "POST",
        url: "http://test.diligo.vn:15000/api/v1/recruitment/apply",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          // alert(response, "Ban da ung tuyen thanh cong");
          setTimeout(function () {
            if (
              name !== "" &&
              phone !== "" &&
              email !== "" &&
              fileName !== ""
            ) {
              history.push("/ung-tuyen-thanh-cong");
            } else {
              alert("Vui lòng nhập lại");
            }
          }, 1000);
        })
        .catch((error) => {
          // alert(error.message);
          setTimeout(function () {
            if (
              name !== "" &&
              phone !== "" &&
              email !== "" &&
              fileName !== ""
            ) {
              history.push("/ung-tuyen-thanh-cong");
            } else {
              alert("Vui lòng nhập lại");
            }
          }, 1000);
        });
    }
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
  const [header, setHeader] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {data.find((ele) => ele.id === Number(jobId)) &&
            data.find((ele) => ele.id === Number(jobId)).name.name}
        </title>
        <meta
          name="description"
          content={
            data.find((ele) => ele.id === Number(jobId)) &&
            data.find((ele) => ele.id === Number(jobId)).name.name
          }
        />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
      <div className="container" style={{ margin: "1rem auto 90px" }}>
        <Breadcrumbs separator=">" breadItem={breadcrumItem} />
        <div style={{ textAlign: "center" }} className={styles.Recruit}>
          <h3>Bạn đang ứng tuyển vị trí</h3>
          <h4 className={styles.jobTitle}>
            {data.find((ele) => ele.id === Number(jobId)) &&
              `"${data.find((ele) => ele.id === Number(jobId)).name.name}"`}
          </h4>
          <div className={styles.formRecruit}>
            <form encType="multipart/form-data">
              <div className={styles.inputName}>
                <label htmlFor="inputName" className={styles.inputLabel}>
                  Họ và tên đầy đủ
                </label>
                <input type="hidden" value={jobId} id="job_id" />
                {/* <input type="hidden" value={jobId} id="job_name" /> */}
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
                {/* <input
                  type="file"
                  id="file"
                  className={styles.inputFile}
                  name="file"
                  required
                /> */}
                <input
                  type="file"
                  id="file"
                  ref={inputFileRef}
                  onChange={onFileChange}
                  name="file"
                  accept="image/*,video/*,.pdf,.doc, .docx"
                  style={{ display: "none" }}
                />
                <div className={styles.inputUrl}>
                <label htmlFor="inputUrl" className={styles.inputLabel}>
                  Link Facebook | LinkedIn | Youtube cá nhân
                </label>
                <input
                  type="text"
                  id="inputField"
                  className={styles.inputField}
                  name="url"
                />
              </div>
                <div
                  onClick={onBtnClick}
                  className={`${styles.buttonSubmit} ${styles.active}`}
                  style={{ cursor: "pointer" }}
                >
                  Đính kèm file CV của bạn
                </div>
                {fileName}
              </div>
              <div>
                <p className="m-0"> {`hoặc sử dụng biểu mẫu CV của Diligo`} </p>
                <p className="mt-1">
                  {" "}
                  {`Ấn `}
                  <a
                    href={filesCV}
                    style={{ color: "#c50c0c", textDecoration: "none" }}
                    download
                  >
                    vào đây
                  </a>{" "}
                  để tải về
                </p>
              </div>
              
              {name !== "" &&
              phone !== "" &&
              email !== "" &&
              fileName !== "" ? (
                <div
                  // type="submit"
                  onClick={() => handleLogin()}
                  className={`${styles.buttonSubmit} ${styles.active}`}
                  style={{ cursor: "pointer" }}
                >
                  ỨNG TUYỂN
                </div>
              ) : (
                <div
                  // type="submit"
                  className={`${styles.buttonSubmit} ${styles.active}`}
                  style={{ cursor: "pointer", backgroundColor: "#d7cfcf" }}
                >
                  ỨNG TUYỂN
                </div>
              )}

              {/* <div className={styles.noCV}>
                <a href={filesCV}  download>
                  Tải CV tiêu chuẩn của Diligo
                </a>
              </div> */}
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
