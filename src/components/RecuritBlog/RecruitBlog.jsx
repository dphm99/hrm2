import React, { useContext } from "react";
import styles from "../RecuritBlog/RecruitBlog.module.css";
import { RecruitContext } from "../contexts/ContextRecuit";
const RecruitBlog = () => {
  const { data } = useContext(RecruitContext);
  console.log(data);
  return (
    <>
      <div
        className={`${styles.main}card mb-4`}
        style={{
          position: `sticky`,
          top: `11rem`,
          border: ` 1px solid #ddd`,
        }}
      >
        <div
          className="card-header py-3"
          style={{ borderBottom: `solid 1px #ddd` }}
        >
          <h5 className={`${styles.title}  my-0 `}><strong>TIN TUYỂN DỤNG NỔI BẬT</strong></h5>
        </div>
        {data && data.map((e, index) => {
          if (index < 5) {
            return (
              <div className={`${styles.block} card-header py-3`} key={index}>
                <div
                  className={`row d-flex`}
                  style={{
                    fontSize: `18px`,
                  }}
                >
                  <p className={`${styles.jobName} my-0 col-8`}>
                    {e.industry ? e.industry : "Chuyên viên Marketing"}
                  </p>
                  <p className={`${styles.deadLine}  col-4`}>{e.deadline}</p>
                </div>

                <div className={`row d-flex`}>
                  <p className={`${styles.address}  col-8`}>{e.address.name}</p>
                  <h5
                    className={`col-4`}
                    style={{
                      fontWeight: 600,
                      position: `relative`,
                      cursor: `pointer`,
                      fontSize: `13px`,
                      color: `rgb(177, 0, 0)`,
                    }}
                  >ỨNG TUYỂN</h5>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default RecruitBlog;
