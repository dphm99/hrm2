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
          <h5 className="my-0 fw-normal">TIN TUYỂN DỤNG NỔI BẬT</h5>
        </div>
        {data.map((e, index) => {
          if (index < 5) {
            return (
              <div className="card-header py-3 ">
                <div className={`row d-flex`}>
                  <p className={`${styles.jobName} my-0 fw-normal col-8`}>
                    {e.industry ? e.industry : "Chuyên viên Marketing"}
                  </p>
                  <p className={`${styles.deadLine}  col-4`}>{e.deadline}</p>
                </div>

                <div className={`row d-flex`}>
                  <p className={`${styles.address}  col-8`}>{e.address.name}</p>
                  <h5 className={`  col-4`}>ỨNG TUYỂN</h5>
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
