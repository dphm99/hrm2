import React, { useContext } from "react";
import styles from "../RecruitSideBar/RecruitSideBar.module.css";
import { RecruitContext } from "../contexts/ContextRecuit";
import { toSlug } from "../extensions/toSlug";
import { Link } from "react-router-dom";
const RecruitBlog = ({
  end
}) => {
  const { data } = useContext(RecruitContext);
  console.log(data);

  // function checkDate(e) {
  //   if (1=1) {
  //     return false
  //   }
  //   else {
  //     return true
  //   }
  // }
  return (
    <>
      <div
        className={`${styles.main}card mb-4`}
        style={{
          position: `sticky`,
          top: `7rem`,
          border: ` 1px solid #ddd`,
        }}
      >
        <div
          className="card-header py-3"
          style={{ borderBottom: `solid 1px #ddd` }}
        >
          <h5 className={`${styles.title}  my-0 `}>
            <strong>TIN TUYỂN DỤNG NỔI BẬT</strong>
          </h5>
        </div>
        {data &&
          data
            .map((e, index) => {
              if (index < 5) {
                return (
                  <div
                    className={`${styles.block} card-header  `}
                    key={index}
                  >
                    <div
                      className={`${styles.head_item} row d-flex `}
                      style={{
                        fontSize: `18px`,
                      }}
                    >

                      <Link
                        to={{
                          pathname: `/tuyen-dung/${toSlug(e.name)}`,
                          search: `#${index}#${e.id}`,
                        }}
                        className={`${styles.jobName} my-0 col-8`}
                        style={{ display: "flex", justifyContent: "space-between" }}
                      >

                        {e.name} {
                          e.status === true ? <span className={styles.tag}>Hot</span>
                            : ""
                        }
                      </Link>
                      <p className={`${styles.deadLine}  col-4`}>
                        {e.deadline.split("-").reverse().join("/")}
                      </p>
                    </div>

                    <div className={`row d-flex`}>
                      <p className={`${styles.address}  col-8`}>
                        {e.address?.name}
                      </p>
                      <Link
                        key={index}
                        to={{
                          pathname: `/ung-tuyen/${toSlug(e.name)}`,
                          search: `#${index}#${e.id}`,
                        }}
                        className={`col-4 ${styles.link}`}
                        style={{ paddingLeft: "22px" }}
                      >
                        ỨNG TUYỂN
                      </Link>
                    </div>
                  </div>
                );
              } else {
                return false;
              }
            })}
      </div>
    </>
  );
};

export default RecruitBlog;
