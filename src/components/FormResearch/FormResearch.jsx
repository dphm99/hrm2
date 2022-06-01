import React from "react";
import styles from "./FormResearch.module.css";
import Infomation from "./Infomation";


function FormResearch() {
  const [info] = React.useState(false);
  
  function Onclip() {
    const alert1 = document.getElementById('inputName').value;
    if(alert1.length == 0) {
      
      return false
    }


    const alert = document.getElementById('Infoma');
    alert.style.display = "block"
  }

  function validateForm() {
    if(!Onclip() ){
      return false
    }
  }

  return (
    <div className={` ${styles.containALl}`}>
      <div className="container">
        <div
          className={`row ${styles.wrap} justify-content-center`}
          style={{ marginTop: "10rem" }}
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
                      type="text"
                      id="inputName"
                      name="fullname"
                      className={styles.inputField}
                      // onChange={(e) => setName(e.target.value)}
                      placeholder="Số CCCD"
                      required
                    />
                  </div>
                  <div className={styles.inputName}>
                    <input
                      type="text"
                      id="inputName"
                      name="fullname"
                      className={styles.inputField}
                      // onChange={(e) => setName(e.target.value)}
                      placeholder="Số điện thoại"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={validateForm}
                    className={`${styles.buttonSubmit} ${styles.active}`}
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
