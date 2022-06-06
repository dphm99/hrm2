import React from "react";
import styles from "./FormResearch.module.css";
import Infomation from "./Infomation";

function FormResearch() {
  const [info] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [mail, setMail] = React.useState("");

  function handleSubmit() {
    
  }

  function validateEmail() {
    //eslint-disable-next-line
    if (!mail.match(/^[A-Za-z_\-[0-9]*[@][A-Za-z]*[][a-z]{2,4}$/)) {
      return false;
    }
    return true;
  }

    // const alert = document.getElementById('Infoma');
    //alert.style.display = "block" 

  return (
    <div className={` ${styles.containALl}`}>
      <div className="container">
        <div
          className={`row ${styles.wrap} justify-content-center`}
          style={{ paddingTop: "5rem", paddingBottom: "10rem" }}
        >
          <div className="col-lg-6">
            <div style={{ textAlign: "center" }} className={styles.Recruit}>
              <div className={styles.formRecruit}>
                <form encType="multipart/form-data">
                  <h2 className={styles.title}>Tra cứu kết quả ứng tuyển</h2>
                  <p className={styles.text}>
                    Anh / Chị vui lòng nhập cả 2 thông tin sau đây
                  </p>
                  <div className={styles.inputName}>
                    <input
                      type="number"
                      className={styles.inputField}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Số điện thoại"
                      pattern="/^[0-9]$/"
                      required
                    />
                    {console.log(phone)}
                  </div>
                  <div className={styles.inputName}>
                    <input
                      type="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      className={styles.inputField}
                      onChange={(e) => setMail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                    className={`${styles.buttonSubmit}`}
                    style={
                      phone.length === 10 && validateEmail()
                        ? {
                            backgroundColor: "#bf202e",
                            color: "#fff",
                            cursor: "pointer",
                          }
                        : {}
                    }
                  >
                    Tra cứu
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={`${styles.FormInfoma} col-lg-6`} id="Infoma">
            {info ? <Infomation /> : <Infomation />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResearch;
