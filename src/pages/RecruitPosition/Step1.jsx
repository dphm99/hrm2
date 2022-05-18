import React from "react";
import styles from "./RecruitPosition.module.css";

function Step1() {
  const [checkList, setCheckList] = React.useState({
    gender: "male",
    status: "single",
  });
  return (
    <form className={`${styles.FormPosition}`}>
      <div className={`${styles.inputRadio} `}>
        <div className={`${styles.inputRadioSide}`}>
          <div className={`${styles.inputRadioItemTitle}`}>
            Giới tính <span>*</span>
          </div>
          <div className={`${styles.inputRadioItems}`}>
            <div
              className={`${styles.inputRadioItem}`}
              onClick={() =>
                setCheckList({
                  ...checkList,
                  gender: "male",
                })
              }
            >
              <p>
                <input
                  type="radio"
                  id="sex"
                  name="radio-sex"
                  value="male"
                  defaultChecked={checkList.gender === "male" ? true : false}
                  className={styles.inputRadioButton}
                  required
                />
                <label className={styles.labelRadio} for="sex">
                  Nam
                </label>
              </p>
            </div>
            <div
              className={`${styles.inputRadioItem}`}
              onClick={() =>
                setCheckList({
                  ...checkList,
                  gender: "female",
                })
              }
            >
              <p>
                <input
                  required
                  type="radio"
                  id="sex"
                  name="radio-sex"
                  value={checkList.gender === "female" ? true : false}
                  className={styles.inputRadioButton}
                />
                <label className={styles.labelRadio} for="sex">
                  Nữ
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.inputRadioSide} `}>
          <div className={`${styles.inputRadioItemTitle}`}>
            Tình trạng <span>*</span>
          </div>
          <div className={`${styles.inputRadioItems}`}>
            <div
              className={`${styles.inputRadioItem}`}
              onClick={() =>
                setCheckList({
                  ...checkList,
                  status: "single",
                })
              }
            >
              <p>
                <input
                  required
                  type="radio"
                  id="alone"
                  name="radio-relation"
                  value="alone"
                  defaultChecked={checkList.status === "single" ? true : false}
                  className={styles.inputRadioButton}
                />
                <label className={styles.labelRadio} for="alone">
                  Độc thân
                </label>
              </p>
            </div>
            <div
              className={`${styles.inputRadioItem}`}
              onClick={() =>
                setCheckList({
                  ...checkList,
                  status: "married",
                })
              }
            >
              <p>
                <input
                  required
                  type="radio"
                  id="married"
                  name="radio-relation"
                  value={checkList.status === "married" ? true : false}
                  className={styles.inputRadioButton}
                />
                <label
                  className={styles.labelRadio}
                  style={{ fontSize: "15px" }}
                  for="married"
                >
                  Đã kết hôn
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.input}>
        <label htmlFor="name">
          Họ và tên đầy đủ <span>*</span>
        </label>
        <input type="text" id="name" required />
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.inputGroupLine}>
          <div className={styles.input}>
            <label htmlFor="dob">
              Ngày tháng năm sinh <span>*</span>
            </label>
            <input type="text" id="dob" required />
          </div>
          <div className={styles.input}>
            <label htmlFor="ccid">
              Số CCCD / CMND <span>*</span>
            </label>
            <input type="text" id="ccid" required />
          </div>
        </div>
        <div className={styles.inputGroupLine}>
          <div className={styles.input}>
            <label htmlFor="phone">
              Số điện thoại <span>*</span>
            </label>
            <input type="text" id="phone" required />
          </div>
          <div className={styles.input}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input type="text" id="email" required />
          </div>
        </div>
        <div className={styles.inputGroupAddress}>
          <p className={styles.inputAddressTitle}>Nơi ở hiện nay</p>
          <div className={styles.inputGroupLine}>
            <div className={styles.input}>
              <input type="text" id="province" placeholder="Tỉnh/Thành phố" />
            </div>
            <div className={styles.input}>
              <input type="text" id="district" placeholder="Quận/Huyện" />
            </div>
          </div>
          <div className={styles.inputGroupLine}>
            <div className={styles.input}>
              <input type="text" id="street" placeholder="Phường/ Xã" />
            </div>
            <div className={styles.input}>
              <input type="text" id="housenumber" placeholder="Số nhà" />
            </div>
          </div>
          <div className={styles.input}>
            <label htmlFor="link">Link Facebook | KinkedIn | Instagram</label>
            <input type="text" id="link" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Step1;
