import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BlogContent.module.css";
import { BlogContext } from "../../../components/contexts/ContextBlog";
import RecruitSideBar from "../../../components/RecruitSideBar/RecruitSideBar";
import Breadcrumbs from "../../../components/BreadCrumb/Breadcrumb";
import { toSlug } from "../../../components/extensions/toSlug";
import nodata from '../../../assets/img/nodata.jpg'
export default function BlogContent() {
  const { data } = useContext(BlogContext);
  const [active, setActive] = useState("Mới nhất");
  const [moreBlogs, setMoreBlogs] = useState(4);
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/vi-tri-tuyen-dung",
      title: "Vị trí tuyển dụng",
      isActive: true,
    },
  ];

  const New = [
    {
      title: "Mới nhất",
      short: "office",
    },
    {
      title: "Kinh nghiệm tuyển dụng",
      short: "office",
    },
    {
      title: "Bản tin tuyển dụng",
      short: "office",
    },
    {
      title: "Văn hoá Diligo",
      short: "office",
    },
    {
      title: "Video",
      short: "office",
    },
  ];

  return (
    <div className={`${styles.main}`}>
      <Breadcrumbs breadItem={breadcrumItem} />

      <div className={`${styles.wrapNav}`}>
        {New &&
          New.map((e, index) => {
            return (
              <div
                key={index}
                className={
                  active === e.title
                    ? `${styles.nav} ${styles.active}`
                    : `${styles.nav}`
                }
                onClick={() => {
                  setActive(e.title);
                }}
              >
                <strong>{e.title}</strong>
              </div>
            );
          })}
      </div>

      <div className="row mb-2">
        <div className={`${styles.content} col-lg-8`}>
          {(data &&

            data.filter((ele) => ele.tag_ids.name === (active === "Mới nhất" ? ele.tag_ids.name : active)).length > 0) ?
            data.filter((ele) => ele.tag_ids.name === (active === "Mới nhất" ? ele.tag_ids.name : active)).map((e, index) => {

              if (index <= moreBlogs) {
                return (
                  <div key={index}>
                    <Link
                      className={styles.BannerLink}
                      to={{
                        pathname: `/dinh-huong-nghe-nghiep/${toSlug(e.title)}`,
                        search: `#${index}#${e.id}`,
                      }}
                    >
                      <div className="row g-0 overflow-hidden flex-md-row mb-4 bg-light h-md-250 position-relative">
                        <div
                          className={`${styles.Block_img} d-lg-block col-4`}
                        >
                          <img
                            className="bd-placeholder-img"
                            height="180"
                            src={e.avatar}
                            alt="banner"
                          ></img>
                        </div>
                        <div
                          className={`${styles.BannerBlockflex} col-8 d-flex flex-column position-static`}
                        >
                          <h6 className={`${styles.Block_H6} mb-2`}>
                            <strong>{e.title}</strong>
                          </h6>
                          <p
                            className={`${styles.Block_P} mb-auto`}
                            dangerouslySetInnerHTML={{
                              __html: `${e.content}`,
                            }}
                          ></p>
                          <div className={styles.Block__link}>
                            <p
                              to={{
                                pathname: `/dinh-huong-nghe-nghiep/${toSlug(
                                  e.title
                                )}`,
                                search: `#${index}#${e.id}`,
                              }}
                              className={`${styles.Block_A} stretched-link`}
                            >
                              {e.tag_ids.name}
                            </p>

                            <p style={{ color: `#000` }}>- 2.500 lượt xem</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="pb-1 mb-4 fst-italic border-bottom"></div>
                  </div>
                );
              }

                else {
                  return false;
                }
           }) ) : <div className="d-flex justify-content-center align-items-center mb-5"><img src={nodata} alt='/'/></div>}
         {(data &&
            data.filter((ele) => ele.tag_ids.name === (active==="Mới nhất" ? ele.tag_ids.name :active)).length > 0) &&  <div className="d-flex">

            <button
              className={`${styles.showMore}`}
              onClick={() => setMoreBlogs(moreBlogs * 2)}
            >
              Xem thêm
            </button>
          </div>}
        </div>
        <div className={`${styles.recruitSideBar} col-lg-4`}>
          <RecruitSideBar />
        </div>
      </div>
    </div>
  );
}

// export default BannerBlock;
