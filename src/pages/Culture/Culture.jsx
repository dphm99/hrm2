import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Culture.module.css";
import { BlogContext } from "../../components/contexts/ContextBlog";
import RecruitSideBar from "../../components/RecruitSideBar/RecruitSideBar";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import { toSlug } from "../../components/extensions/toSlug";
import nodata from "../../assets/img/nodata.jpg";
import CardVideo from "../../components/CardVideo/CardVideo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header/Header2";
import { Helmet } from "react-helmet";
import Loadings from "../../components/Loadings/Loadings";
import Slider2 from "../../components/Slider/Slider2";

export default function Culture() {
  const a = 0;
  const { data } = useContext(BlogContext);
  const [showAlert, setShowAlert] = useState({
    show: false,
    name: "",
    iframe: "",
  });
  const [active, setActive] = useState("Văn hóa");
  const [moreBlogs, setMoreBlogs] = useState(4);
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/van-hoa",
      title: "Văn hóa",
      isActive: true,
    },
  ];

  const New = [
    {
      title: "Văn hóa",
      short: "office",
    },
    {
      title: "Video",
      short: "office",
    },
  ];
  console.log(
    data.filter((e) => {
      if (
        e.quiz_ids.filter(
          (tag) =>
            tag.name === (active === "Văn hóa Diligo" ? tag.name : active)
        ).length > 0
      ) {
        return e;
      }
    })
  );

  const [header, setHeader] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Văn hóa - Diligo</title>
        <meta name="description" content={`Văn hóa - Diligo`} />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
      <Slider2 />
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
        {data !== [] ? (
          <>
            <div className="row mb-2">
              <div className={`${styles.content} col-lg-8`}>
                {data &&
                  data.filter((e) => {
                    return (
                      e.quiz_ids.filter(
                        (tag) =>
                          tag.name ===
                          (active === "Văn hóa Diligo" ? tag.name : active)
                      ).length > 0
                    );
                  }).length > 0 ? (
                  data
                    .filter((e) => {
                      return (
                        e.quiz_ids.filter(
                          (tag) =>
                            tag.name ===
                            (active === "Văn hóa Diligo" ? tag.name : active)
                        ).length > 0
                      );
                    })
                    .map((e, index) => {
                      if (index <= moreBlogs) {
                        return active !== "Video" ? (
                          <div key={index}>
                            <Link
                              className={styles.BannerLink}
                              to={{
                                pathname: `/van-hoa/${toSlug(e.title)}`,
                                search: `#${index}#${e.id}`,
                              }}
                            >
                              <div
                                className={`${styles.wrapper} row g-0 overflow-hidden flex-md-row mb-4 bg-light h-md-250 position-relative`}
                              >
                                <div
                                  className={`${styles.Block_img} d-lg-block col-md-4`}
                                >
                                  <img
                                    className="bd-placeholder-img"
                                    height="180"
                                    src={e.avatar}
                                    alt="banner"
                                  ></img>
                                </div>
                                <div
                                  className={`${styles.BannerBlockflex} col-md-8 d-flex flex-column position-static`}
                                >
                                  <h6 className={`${styles.Block_H6} mb-2`}>
                                    <strong>{e.title}</strong>
                                  </h6>
                                  <p
                                    className={`${styles.Block_P} mb-auto`}
                                    dangerouslySetInnerHTML={{
                                      __html: `${e.description}`,
                                    }}
                                  ></p>
                                  {/* <div className={styles.Block__link}>
                                <p
                                  to={{
                                    pathname: `/van-hoa/${toSlug(e.title)}`,
                                    search: `#${index}#${e.id}`,
                                  }}
                                  className={`${styles.Block_A} stretched-link`}
                                >
                                  {e.quiz_ids.name}
                                </p>
                              </div> */}
                                </div>
                              </div>
                            </Link>
                            <div className="pb-1 mb-4 fst-italic border-bottom"></div>
                          </div>
                        ) : (
                          <div key={index}>
                            <Link
                              className={styles.BannerLink}
                              to={{
                                pathname: `/van-hoa/${toSlug(e.title)}`,
                                search: `#${index}#${e.id}`,
                              }}
                            >
                              <div
                                className={`${styles.wrapper} row g-0 overflow-hidden flex-md-row mb-4 bg-light h-md-250 position-relative`}
                              >
                                <div
                                  style={{ zIndex: "99" }}
                                  className={`${styles.Block_img} ${styles.Block_video} d-lg-block col-md-4`}
                                >
                                  <CardVideo
                                    iframe={e.src}
                                    title={e.title}
                                    image={e.avatar}
                                    content={e.content}
                                    onClick={() =>
                                      setShowAlert({
                                        show: true,
                                        name: e.title,
                                        iframe: e.avatar,
                                      })
                                    }
                                    onClose={() =>
                                      setShowAlert((prev) => ({
                                        ...prev,
                                        show: false,
                                      }))
                                    }
                                    show={showAlert.show}
                                  />
                                </div>
                                <div
                                  className={`${styles.BannerLink} d-lg-block col-md-8`}
                                  to={{
                                    pathname: `/van-hoa/${toSlug(e.title)}`,
                                    search: `#${index}#${e.id}`,
                                  }}
                                >
                                  <div
                                    className={`${styles.BannerBlockflex} col-md-12 d-flex flex-column position-static`}
                                  >
                                    <h6 className={`${styles.Block_H6} mb-2`}>
                                      <strong>{e.title}</strong>
                                    </h6>
                                    <p
                                      className={`${styles.Block_P} mb-auto`}
                                      dangerouslySetInnerHTML={{
                                        __html: `${e.description}`,
                                      }}
                                    ></p>
                                    {/* <div className={styles.Block__link}>
                                  <p
                                    to={{
                                      pathname: `/van-hoa/${toSlug(e.title)}`,
                                      search: `#${index}#${e.id}`,
                                    }}
                                    className={`${styles.Block_A} stretched-link`}
                                  >
                                    {e.quiz_ids.name}
                                  </p>
                                </div> */}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      } else {
                        return false;
                      }
                    })
                ) : (
                  <div className="d-flex justify-content-center align-items-center mb-5">
                    <img src={nodata} alt="/" />
                  </div>
                )}
                {data &&
                  data.filter((e) => {
                    return (
                      e.quiz_ids.filter(
                        (tag) =>
                          tag.name ===
                          (active === "Văn hóa Diligo" ? tag.name : active)
                      ).length > 0
                    );
                  }).length > 5 && (
                    <div className="d-flex">
                      <button
                        className={`${styles.showMore}`}
                        onClick={() => setMoreBlogs(moreBlogs * 2)}
                      >
                        Xem thêm
                      </button>
                    </div>
                  )}
              </div>
              <div className={`${styles.recruitSideBar} col-lg-4`}>
                <RecruitSideBar />
              </div>
            </div>
          </>
        ) : (
          <Loadings />
        )}
      </div>
      <Footer />
    </>
  );
}

// export default BannerBlock;
