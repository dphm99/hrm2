import React from "react";
// , { createContext, useContext }
import styles from "./RecruitPosition.module.css";

function Step1() {
  const [checkList, setCheckList] = React.useState({
    gender: "male",
    status: "single",
  });
  // const checkListContext = useContext(checkList)
  
  return (
    <form className={`${styles.FormPosition}`} novalidate>
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
                <div class="invalid-feedback">
      Please provide a valid city.
    </div>
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
        <input
          type="text"
          id="name"
          onChange={(e) =>
            setCheckList({
              ...checkList,
              fullname: e.target.value,
            })
          }
          required
        />
        <div class="invalid-feedback">
      Please provide a valid city.
    </div>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.inputGroupLine}>
          <div className={styles.input}>
            <label htmlFor="dob">
              Ngày tháng năm sinh <span>*</span>
            </label>
            <input
              type="date"
              id="dob"
              required
              onChange={(e) =>
                setCheckList({
                  ...checkList,
                  dob: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="ccid">
              Số CCCD / CMND <span>*</span>
            </label>
            <input
              type="text"
              id="ccid"
              required
              onChange={(e) =>
                setCheckList({
                  ...checkList,
                  ccid: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={styles.inputGroupLine}>
          <div className={styles.input}>
            <label htmlFor="phone">
              Số điện thoại <span>*</span>
            </label>
            <input
              type="number"
              id="phone"
              required
              onChange={(e) =>
                setCheckList({
                  ...checkList,
                  phone: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              required
              onChange={(e) =>
                setCheckList({
                  ...checkList,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={styles.inputGroupAddress}>
          <p className={styles.inputAddressTitle}>Nơi ở hiện nay</p>
          <div className={styles.inputGroupLine}>
            <div className={styles.input}>
              <input
                type="text"
                id="province"
                placeholder="Tỉnh/Thành phố"
                onChange={(e) =>
                  setCheckList({
                    ...checkList,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.input}>
              <input
                type="text"
                id="district"
                placeholder="Quận/Huyện"
                onChange={(e) =>
                  setCheckList({
                    ...checkList,
                    district: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={styles.inputGroupLine}>
            <div className={styles.input}>
              <input
                type="text"
                id="street"
                placeholder="Phường/ Xã"
                onChange={(e) =>
                  setCheckList({
                    ...checkList,
                    street: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.input}>
              <input
                type="text"
                id="housenumber"
                placeholder="Số nhà"
                onChange={(e) =>
                  setCheckList({
                    ...checkList,
                    housenumber: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={styles.input}>
            <label htmlFor="link">Link Facebook | KinkedIn | Instagram</label>
            <input
              type="text"
              id="link"
              onChange={(e) =>
                setCheckList({
                  ...checkList,
                  link: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Step1;
