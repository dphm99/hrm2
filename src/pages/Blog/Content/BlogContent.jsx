import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./BlogContent.module.css";
import { BlogContext } from "../../../components/contexts/ContextBlog";
import RecruitBlog from "../../../components/RecuritBlog/RecruitBlog";
import Breadcrumbs from "../../../components/BreadCrumb/Breadcrumb";
import { toSlug } from "../../../components/extensions/toSlug";
import Pagination from "../../../components/extensions/Pagination/Pagination";

let PageSize = 3;

export default function BlogContent() {
  const { data } = useContext(BlogContext);
  const [active, setactive] = useState(0);

  const [category, setCategory] = useState("office");
  const [dataSliced, setdataSliced] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = React.useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;

    const lastPageIndex = firstPageIndex + PageSize;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  React.useEffect(() => {
    if (data) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      setdataSliced(data.slice(firstPageIndex, lastPageIndex));
      {console.log(data.length)}

    }
  }, [data, currentPage]);

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

  return (
    <div>
      <div className="container">
        <div className={styles.Banner}>
          <Breadcrumbs breadItem={breadcrumItem} />

          <div className={`${styles.BlogTop} row mt-5`}>
            {New.map((e, index) => {
              return (
                <div key={index} className={`${styles.BannerCol} col-sm-2`}>
                  <div
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
              {dataSliced &&
                dataSliced.map((e, index) => {
                  return (
                    <>
                      <Link
                      key={index}
                        className={styles.BannerLink}
                        to={{
                          pathname: `/blog-chi-tiet/${toSlug(e.title)}`,
                          search: `#${e.id}`,
                        }}
                      >
                        <div className="row g-0 overflow-hidden flex-md-row mb-4 bg-light h-md-250 position-relative">
                          <div
                            className={`${styles.Block_img} col-auto d-lg-block col-4`}
                          >
                            <img
                              className="bd-placeholder-img"
                              width="20"
                              height="160"
                              src={e.avatar}
                              alt="banner"
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
                              <Link
                                to={{
                                  pathname: `/dinh-huong-nghe-nghiep/${toSlug(
                                    e.title
                                  )}`,
                                  search: `#${index}#${e.id}`,
                                }}
                                className={`${styles.Block_A} stretched-link`}
                              >
                                {e.tag_ids.name}
                              </Link>

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
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data.length}
              pageSize={5}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default BannerBlock;
