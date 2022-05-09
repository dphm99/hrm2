import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BlogContent.module.css";
import { BlogContext } from "../../../components/contexts/ContextBlog";
import RecruitBlog from "../../../components/RecuritBlog/RecruitBlog";
import Breadcrumbs from "../../../components/BreadCrumb/Breadcrumb";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { toSlug } from "../../../components/extensions/toSlug";
export default function BannerBlock() {
  const { data } = useContext(BlogContext);
  const [active, setactive] = useState(0);
  const [category, setCategory] = useState("office");
  const [pagination, setpagination] = useState(0);
  const [paginationactive, setPaginationactive] = useState("office");

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
      title: "MỚI NHẤT",
      short: "office",
    },
    {
      title: "KINH NGHIỆM TUYỂN DỤNG",
      short: "office",
    },
    {
      title: "BẢN TIN TUYỂN DỤNG",
      short: "office",
    },
    {
      title: "VĂN HÓA DILIGO",
      short: "office",
    },
    {
      title: "VIDEO",
      short: "office",
    },
  ];
  const Pagination = [
    {
      title: "1",
      short: "office",
    },
    {
      title: "2",
      short: "office",
    },
    {
      title: "3",
      short: "office",
    },
    {
      title: "4",
      short: "office",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className={styles.Banner}>
          <Breadcrumbs breadItem={breadcrumItem} />

          <div className={`${styles.BlogTop} row mt-5`}>
            {New.map((e, index) => {
              return (
                <div className={`${styles.BannerCol} col-sm-2`}>
                  <div
                    key={index}
                    className={
                      active === index
                        ? `${styles.BannerNav} ${styles.active}`
                        : `${styles.BannerNav}`
                    }
                    onClick={() => {
                      setactive(index);
                      setCategory(e.short);
                    }}
                    style={{
                      height: `58px`,
                      display: `flex`,
                      alignItems: `center`,
                    }}
                  >
                    <div className={styles.BannerActive}>{e.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row mb-2">
            <div className={`${styles.BlogCol6} col-md-6`}>
              {data &&
                data.map((e, index) => {
                  return (
                    <>
                      <Link
                        className={styles.BannerLink}
                        to={{
                          pathname: `/blog-chi-tiet/${toSlug(e.title)}`,
                          search: `#${e.id}`,
                        }}
                      >
                        <div class="row g-0 overflow-hidden flex-md-row mb-4 bg-light h-md-250 position-relative">
                          <div
                            className={`${styles.Block_img} col-auto d-lg-block col-4`}
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
                            <p
                              className={`${styles.Block_P} mb-auto`}
                              dangerouslySetInnerHTML={{
                                __html: `${e.content}`,
                              }}
                            ></p>
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
                      </Link>
                      <div className="pb-1 mb-4 fst-italic border-bottom"></div>
                    </>
                  );
                })}
            </div>
            <div className={`${styles.BlogCol4} col-md-4`}>
              <RecruitBlog />
            </div>
          </div>
        </div>
        <div className={styles.BlogPagination}>
          <div
            className={`${styles.pagination} d-flex align-items-center justify-content-center`}
          >
            <KeyboardArrowLeftIcon
              className={styles.btn_pagi}
            ></KeyboardArrowLeftIcon>
            {Pagination.map((e, index) => {
              return (
                <Link className={styles.Blogpagination}>
                  {" "}
                  <p
                    className={
                      pagination === index
                        ? `${styles.btn_pagi} ${styles.pagination}`
                        : `${styles.btn_pagi}`
                    }
                    onClick={() => {
                      setpagination(index);
                      setPaginationactive(e.short);
                    }}
                  >
                    {e.title}
                  </p>
                </Link>
              );
            })}
            <ChevronRightIcon className={styles.btn_pagi}></ChevronRightIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default BannerBlock;
