import React, { useContext, useEffect, useState } from "react";
import styles from "./CultureDetail.module.css";
import Footer from "../../../components/Footer/Footer";
import Breadcrumbs from "../../../components/BreadCrumb/Breadcrumb";
import { BlogContext } from "../../../components/contexts/ContextBlog";
import Header2 from "../../../components/Header/Header2";
import RecruitSideBar from "../../../components/RecruitSideBar/RecruitSideBar";
import Header from "../../../components/Header/Header";
import { Helmet } from "react-helmet";

function CultureDetail() {
  const blogId = window.location.hash.split("#")[2];
  const { data } = useContext(BlogContext);
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/van-hoa",
      title: "Văn hóa",
      isActive: false,
    },

    {
      href: "/",
      title:
        data.find((ele) => ele.id === Number(blogId)) &&
        data.find((ele) => ele.id === Number(blogId)).title,
      isActive: true,
    },
  ];
  const [header, setHeader] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, []);
  return (
    <div className={``}>
      <Helmet>
        <title>
          {data.find((ele) => ele.id === Number(blogId)) &&
            data.find((ele) => ele.id === Number(blogId)).title}
        </title>
        <meta
          name="description"
          content={
            data.find((ele) => ele.id === Number(blogId)) &&
            `${data.find((ele) => ele.id === Number(blogId)).title}`
          }
        />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
      <div className={`${styles.main} container-lg`}>
        <Breadcrumbs
          breadItem={breadcrumItem}
          className={`${styles.Breadcrumbs}`}
        />
        {data.find((ele) => ele.id === Number(blogId)) && (
          <>
            {/* <div className={`row`}>
              <h1
                className={`${styles.title} col-xl-8 col-lg-8`}
                style={{ margin: `5rem 0` }}
              >
                {data.find((ele) => ele.id === Number(blogId)).title}
              </h1>
            </div> */}
            <div className={`row`}  style={{paddingTop: "4rem"}}>
              <div className="col-xl-8 col-lg-8">
              <h1
                className={`${styles.title} `}
              >
                {data.find((ele) => ele.id === Number(blogId)).title}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.find((ele) => ele.id === Number(blogId)).content,
                }}
                className={`${styles.content} `}
              ></div>
              </div>
              <div className={`${styles.recruit} col-xl-4 col-lg-4`}>
                <RecruitSideBar className={`${styles.RecruitSideBar}`} />
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CultureDetail;
