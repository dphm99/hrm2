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
import Slogan from "../../components/Header/Slogan";


function FormRecruit() {
  const { data } = useContext(RecruitContext);
  const history = useHistory();

  // const Index = window.location.hash.split("#")[1];
  const jobId = window.location.hash.split("#")[2];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fileName, setFileName] = useState("");

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
      data.find((ele) => ele.id === Number(jobId)).name
    );
    bodyFormData.append("name", name);
    bodyFormData.append("phone", phone);
    bodyFormData.append("email", email);
    bodyFormData.append("cv", cvv);
    // console.log(bodyFormData);
    if (name !== "" && phone !== "" && email !== "" && cvv !== undefined) {
      axios({
        method: "POST",
        url: "http://hrm.diligo.vn/api/v1/recruitment/apply",
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
              alert("Vui l??ng nh???p l???i");
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
              alert("Vui l??ng nh???p l???i");
            }
          }, 1000);
        });
    }
  };

  const breadcrumItem = [
    {
      href: "/",
      title: "Trang ch???",
      isActive: false,
    },

    {
      href: "/ung-tuyen",
      title: "???ng tuy???n",
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
            data.find((ele) => ele.id === Number(jobId)).name}
        </title>
        <meta
          name="description"
          content={
            data.find((ele) => ele.id === Number(jobId)) &&
            data.find((ele) => ele.id === Number(jobId)).name
          }
        />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
      <Slogan />
      <div className="container" style={{ margin: "1rem auto 90px" }}>
        <Breadcrumbs separator=">" breadItem={breadcrumItem} />
        <div style={{ textAlign: "center" }} className={styles.Recruit}>
          <h3>B???n ??ang ???ng tuy???n v??? tr??</h3>
          <h4 className={styles.jobTitle}>
            {data.find((ele) => ele.id === Number(jobId)) &&
              `"${data.find((ele) => ele.id === Number(jobId)).name}"`}
          </h4>
          <div className={styles.formRecruit}>
            <form encType="multipart/form-data">
              <div className={styles.inputName}>
                <label htmlFor="inputName" className={styles.inputLabel}>
                  H??? v?? t??n ?????y ?????
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
                    S??? ??i???n tho???i
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
                    Link Facebook | LinkedIn | Youtube c?? nh??n
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
                  ????nh k??m file CV c???a b???n
                </div>
                {fileName}
              </div>
              <div>
                <p className="m-0"> {`ho???c s??? d???ng bi???u m???u CV c???a Diligo`} </p>
                <p className="mt-1">
                  {" "}
                  {`???n `}
                  <a
                    href={filesCV}
                    style={{ color: "#c50c0c", textDecoration: "none" }}
                    download
                  >
                    v??o ????y
                  </a>{" "}
                  ????? t???i v???
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
                  ???NG TUY???N
                </div>
              ) : (
                <div
                  // type="submit"
                  className={`${styles.buttonSubmit} ${styles.active}`}
                  style={{ cursor: "pointer", backgroundColor: "#d7cfcf" }}
                >
                  ???NG TUY???N
                </div>
              )}

              {/* <div className={styles.noCV}>
                <a href={filesCV}  download>
                  T???i CV ti??u chu???n c???a Diligo
                </a>
              </div> */}
              <div className={styles.desc}>
                <ul>
                  L??u ?? khi ????ng CV
                  <li>
                    1. Ch??? ????ng t???i file CV d?????i d???ng PDF, c?? k??ch th?????c kh??ng
                    v?????t 100mb
                  </li>
                  <li>2. L??u t??n c???n ?????m b???o th???c hi???n theo th??? t???:</li>
                  <p className="text-center">
                    CV_[T??n v??? tr?? ???ng tuy???n]_H??? t??n ?????y ?????
                  </p>
                  <p className="text-center">V?? d???: CV_TPHCNS_Nguy???n V??n A</p>
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
