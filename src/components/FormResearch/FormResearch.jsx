import React, { useEffect } from "react";
import styles from "./FormResearch.module.css";
import Infomation from "./Infomation";
import axios from "axios";

function FormResearch() {
  const [info, setInfor] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [data, setData] = React.useState("");

  const getData = (phone, email) => {
    axios
      .get("http://hrm.diligo.vn/api/v1/result-recruitment", {
        params: {
          phone: phone,
          email: email,
        },
      })
      .then((res) => {
        setData(res);
        setInfor(true);
      })
      .catch((err) => setData(err));
  };
  console.log(data);

  function handleSubmit(e) {
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    getData(phone, email);
  }

  function validateEmail() {
    if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      return false;
    }
    return true;
  }
  function enterPress(e) {
    if (
      (e.key === "Enter" || e.keyCode === 13) &&
      phone.length === 10 &&
      validateEmail()
    ) {
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      getData(phone, email);
    }
  }

  return (
    <div className={` ${styles.containALl}`}>
      <div className="container">
        <div
          className={`row ${styles.wrap} justify-content-center`}
          style={
            info
              ? {
                  paddingTop: "5rem",
                  paddingBottom: "10rem",
                  transform: `translateX(-300px)`,
                }
              : { paddingTop: "5rem", paddingBottom: "10rem" }
          }
        >
          <div className="">
            <div style={{ textAlign: "center" }} className={styles.Recruit}>
              <div className={styles.formRecruit}>
                <div encType="multipart/form-data">
                  <h2 className={styles.title}>Tra cứu kết quả ứng tuyển</h2>
                  <p className={styles.text}>
                    Anh / Chị vui lòng nhập cả 2 thông tin sau đây
                  </p>
                  <div className={styles.inputName}>
                    <input
                      type="number"
                      id="phone"
                      className={styles.inputField}
                      onChange={(e) => setPhone(e.target.value)}
                      onKeyUp={enterPress}
                      placeholder="Số điện thoại"
                      pattern="/^[0-9]$/"
                      required
                    />
                    {console.log(phone)}
                  </div>
                  <div className={styles.inputName}>
                    <input
                      type="email"
                      id="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      className={styles.inputField}
                      onChange={(e) => setMail(e.target.value)}
                      onKeyUp={enterPress}
                      placeholder="Email"
                      required
                    />
                  </div>
                  {phone.length === 10 && validateEmail() ? (
                    <button
                      type="submit"
                      onClick={() => {
                        handleSubmit();
                      }}
                      className={`${styles.buttonSubmit}`}
                      style={{
                        backgroundColor: "#bf202e",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      Tra cứu
                    </button>
                  ) : (
                    <button type="submit" className={`${styles.buttonSubmit}`}>
                      Tra cứu
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.FormInfoma}`}
            style={info ? { transform: `translateX(600px)` } : {}}
          >
            {
              <Infomation
                phone={phone}
                mail={mail}
                name={data?.data?.data && data.data.data.name}
                position={data?.data?.data && data.data.data.position}
                isExist={data.data}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResearch;
