import React from "react";
import { Link } from "react-router-dom";
import styles from "./FormResearch.module.css";
import noData from "../../assets/img/noData.gif";
function Infomation(props) {
  return (
    <>
      <div style={{ textAlign: "center" }} className={styles.Recruit}>
        <div className={styles.formInfo}>
          <form
            action=""
            style={{ width: "590px", height: `451px`, position: `relative` }}
          >
            {props.isExist ? (
              <>
                <p className={styles.titleInfo}>
                  Xin chào anh (chị){" "}
                  <span className={styles.higlight_text}>{props.name}</span>
                </p>
                <p className={styles.titleInfo}>
                  Cảm ơn anh chị đã ứng tuyển ở vị trí{" "}
                  <span className={styles.higlight_text}>{props.position}</span>
                  ,
                  <span className={styles.higlight_light}>
                    {" "}
                    Phòng kinh doanh,{" "}
                  </span>
                  Công ty CP Diligo Holdlings.
                </p>
                <p className={styles.titleInfo}>
                  Xin chúc mừng hồ sơ anh (chị){" "}
                  <span className={styles.higlight_text}>
                    đã được phê duyệt.
                  </span>
                </p>
                <p className={styles.titleInfo}>
                  Bộ phận tuyển dụng sẽ liên hệ anh(chị) theo số điện thoại đã
                  cung cấp! Trong thời gian chờ, anh(chị) có thể tham khảo thêm
                  Quy trình tuyển dụng
                  <Link
                    to={{
                      pathname: `/dinh-huong-nghe-nghiep`,
                    }}
                  >
                    Tại đây.
                  </Link>
                </p>
              </>
            ) : (
              <>
                <img
                  src={noData}
                  alt=""
                  style={{ width: `100%`, objectFit: `cover`}}
                />
                <p style={{ fontSize: `28px` }}>
                  Không có dữ liệu cho số điện thoại <span style={{color:`#bf202e`}}>{props.phone}</span> và email <span style={{color:`#bf202e`}}>{props.mail}</span>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Infomation;
