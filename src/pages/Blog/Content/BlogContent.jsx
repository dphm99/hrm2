import React, { useContext } from "react";
import styles from "./BlogContent.module.css";
import demo from "../../../assets/img/icon-svg/anhhh.jpg";
import { BlogContext } from "../../../components/contexts/ContextBlog";
import RecruitBlog from "../../../components/RecuritBlog/RecruitBlog";
const BannerBlock = () => {
  const { data } = useContext(BlogContext);
  console.log(data);
  return (
    <div>
      <div className="container">
        <div className={styles.Banner}>
          <div className="row">
             <div className="col-sm-4">
                  <div className={styles.BannerNavBanne}>
                  <div className={styles.BannerNav}>
                    <p>Moi nhất</p>
                  </div>
                  <div className={styles.BannerNav}>
                    <p>Moi nhất</p>
                  </div>
                  <div className={styles.BannerNav}>
                    <p>Moi nhất</p>
                  </div>
                  <div className={styles.BannerNav}>
                    <p>Moi nhất</p>
                  </div>
                  <div className={styles.BannerNav}>
                    <p>Moi nhất</p>
                  </div>
                  </div>
             </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              {data &&
                data.map((e, index) => {
                  return (
                   <>
                    <div class="row g-0 overflow-hidden flex-md-row mb-4 bg-light h-md-250 position-relative">
                        <div
                          className={`${styles.Block_img} col-auto d-none d-lg-block col-4`}
                        >
                          <img
                            className="bd-placeholder-img"
                            width="20"
                            height="160"
                            src={e.avatar}
                          ></img>
                        </div>
                        <div
                          className={`${styles.BannerBlockflex} col d-flex flex-column position-static`}
                        >
                          <h6 className={`${styles.Block_H6} mb-2`}>
                           {e.title}
                          </h6>
                          <p className={`${styles.Block_P} mb-auto`} dangerouslySetInnerHTML={{ __html: `${e.content}` }}>
                            
                          </p>
                          <div className={styles.Block__link}>
                            <a
                              href="#"
                              className={`${styles.Block_A} stretched-link`}
                            >
                              {e.tag_ids.name}
                            </a>
                            <p>- 2.500 lượt xem</p>
                          </div>
                        </div>
                      </div>
                      <div className="pb-1 mb-4 fst-italic border-bottom"></div>
                   </>   
                  );
                })} 
            </div>
            <div className="col-md-5">
              <div className="col-10">
                
                  {/* <div className="card-header py-3">
                    <h5 className="my-0 fw-normal">TIN TUYỂN DỤNG NỔI BẬT</h5>
                  </div>
                  <div className="card-header py-3">
                    <div className={`${styles.Block__Normal} col-12`}>
                      <p
                        className={`${styles.Block__Normal_FW} my-0 fw-normal`}
                      >
                        Chuyển viên hỗ trợ kinh doanh
                      </p>
                      <p className={styles.Block__Normal_PP}>04/05/2022</p>
                    </div>
                    <div className={`${styles.Block__Normal55} col-12`}>
                      <p className={styles.Block__Normal_PY}>
                        Hà Nội, TP.Hồ Chí Minh và 2 tỉnh thành khác
                      </p>
                      <h7>ỨNG TUYỂN</h7>
                    </div>
                  </div>
                  <div className="card-header py-3">
                    <div className={`${styles.Block__Normal} col-12`}>
                      <p
                        className={`${styles.Block__Normal_FW} my-0 fw-normal`}
                      >
                        Chuyển viên hỗ trợ kinh doanh
                      </p>
                      <p className={styles.Block__Normal_PP}>04/05/2022</p>
                    </div>
                    <div className={`${styles.Block__Normal55} col-12`}>
                      <p className={styles.Block__Normal_PY}>
                        Hà Nội, TP.Hồ Chí Minh và 2 tỉnh thành khác
                      </p>
                      <h7>ỨNG TUYỂN</h7>
                    </div>
                  </div>
                  <div className="card-header py-3">
                    <div className={`${styles.Block__Normal} col-12`}>
                      <p
                        className={`${styles.Block__Normal_FW} my-0 fw-normal`}
                      >
                        Chuyển viên hỗ trợ kinh doanh
                      </p>
                      <p className={styles.Block__Normal_PP}>04/05/2022</p>
                    </div>
                    <div className={`${styles.Block__Normal55} col-12`}>
                      <p className={styles.Block__Normal_PY}>
                        Hà Nội, TP.Hồ Chí Minh và 2 tỉnh thành khác
                      </p>
                      <h7>ỨNG TUYỂN</h7>
                    </div>
                  </div>
                  <div className="card-header py-3">
                    <div className={`${styles.Block__Normal} col-12`}>
                      <p
                        className={`${styles.Block__Normal_FW} my-0 fw-normal`}
                      >
                        Chuyển viên hỗ trợ kinh doanh
                      </p>
                      <p className={styles.Block__Normal_PP}>04/05/2022</p>
                    </div>
                    <div className={`${styles.Block__Normal55} col-12`}>
                      <p className={styles.Block__Normal_PY}>
                        Hà Nội, TP.Hồ Chí Minh và 2 tỉnh thành khác
                      </p>
                      <h7>ỨNG TUYỂN</h7>
                    </div>
                  </div>
                  <div className="card-header py-3">
                    <div className={`${styles.Block__Normal} col-12`}>
                      <p
                        className={`${styles.Block__Normal_FW} my-0 fw-normal`}
                      >
                        Chuyển viên hỗ trợ kinh doanh
                      </p>
                      <p className={styles.Block__Normal_PP}>04/05/2022</p>
                    </div>
                    <div className={`${styles.Block__Normal55} col-12`}>
                      <p className={styles.Block__Normal_PY}>
                        Hà Nội, TP.Hồ Chí Minh và 2 tỉnh thành khác
                      </p>
                      <h7>ỨNG TUYỂN</h7>
                    </div>
                  </div> */}
                  <RecruitBlog />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBlock;
