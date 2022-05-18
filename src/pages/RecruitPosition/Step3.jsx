import React from "react";
import styles from "./RecruitPosition.module.css";

function Step3() {
  const [checkList, setCheckList] = React.useState({
    exp: "under1",
  });
  return (
    <form className={`${styles.FormPosition}`}>
      <div className={`${styles.inputRadio} `}>
        <div className={`${styles.inputRadioSide}`} style={{ width: "100%" }}>
          <div className={`${styles.inputRadioItemTitle}`}>
            Số năm kinh nghiệm <span>*</span>
          </div>
          <div className={`${styles.inputRadioItems}`}>
            <div
              className={`${styles.inputRadioItem}`}
              onClick={() =>
                setCheckList({
                  ...checkList,
                  exp: "under1",
                })
              }
            >
              <p>
                <input
                  type="radio"
                  id="under1"
                  name="radio-exp"
                  value="under1"
                  checked={checkList.exp === "under1" ? true : false}
                  className={styles.inputRadioButton}
                  required
                />
                <label className={styles.labelRadio} for="under1">
                  {`< 1 năm`}
                </label>
              </p>
            </div>
            <div
              className={`${styles.inputRadioItem}`}
              onClick={() =>
                setCheckList({
                  ...checkList,
                  exp: "1to2",
                })
              }
            >
              <p>
                <input
                  required
                  type="radio"
                  id="1to2"
                  name="radio-exp"
                  value={checkList.exp === "1to2" ? true : false}
                  className={styles.inputRadioButton}
                />
                <label className={styles.labelRadio} for="1to2">
                  {`1-2 năm`}
                </label>
              </p>
            </div>
            <div
              className={`${styles.inputRadioItem}`}
              onClick={() =>
                setCheckList({
                  ...checkList,
                  exp: "3to4",
                })
              }
            >
              <p>
                <input
                  required
                  type="radio"
                  id="3to4"
                  name="radio-exp"
                  value={checkList.exp === "3to4" ? true : false}
                  className={styles.inputRadioButton}
                />
                <label className={styles.labelRadio} for="3to4">
                  {`3-4 năm`}
                </label>
              </p>
            </div>
            <div
              className={`${styles.inputRadioItem}`}
              onClick={() =>
                setCheckList({
                  ...checkList,
                  exp: "5more",
                })
              }
            >
              <p>
                <input
                  required
                  type="radio"
                  id="exp"
                  name="radio-exp"
                  value={checkList.exp === "5more" ? true : false}
                  className={styles.inputRadioButton}
                />
                <label className={styles.labelRadio} for="exp">
                  {`5+ năm`}
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.input}>
        <label htmlFor="link">
          Vị trí công việc cao nhất từng làm <span>*</span>
        </label>
        <input
          type="text"
          id="link"
          placeholder="Ghi rõ vị trí cao nhất từng làm"
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="link">
          Thông tin nơi làm việc gần nhất <span>*</span>
        </label>
        <input type="text" id="link" placeholder="Tên công ty" />
        <input type="text" id="link" placeholder="Địa chỉ" />
        <input type="text" id="link" placeholder="Ngành nghề, lĩnh vực" />
      </div>
    </form>
  );
}

export default Step3;
