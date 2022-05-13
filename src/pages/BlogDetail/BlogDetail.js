import React, { useContext } from "react";
import styles from "./BlogDetail.module.css";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import { BlogContext } from "../../components/contexts/ContextBlog";
import Header2 from "../../components/Header/Header2";
import RecruitSideBar from "../../components/RecruitSideBar/RecruitSideBar";
function BlogDetail() {
  const blogIndex = window.location.hash.split("#")[1];
  // const blogId = window.location.hash.split("#")[2];
  const { data } = useContext(BlogContext);
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/dinh-huong-nghe-nghiep",
      title: "Định hướng nghề nghiệp",
      isActive: false,
    },

    {
      href: "/",
      title: data[blogIndex] && data[blogIndex].title,
      isActive: true,
    },
  ];
  return (
    <div className={``}>
      <Header2 />
      <div className={`${styles.main} container-lg`}>
        <Breadcrumbs
          breadItem={breadcrumItem}
          className={`${styles.Breadcrumbs}`}
        />
        {data[blogIndex] && (
          <>
            <div className={`row`}>
              <h1
                className={`${styles.title} col-xl-8 col-lg-8`}
                style={{ margin: `5rem 0` }}
              >
                {data[blogIndex].title}
              </h1>
            </div>
            <div className={`row`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[blogIndex].content,
                }}
                className={`${styles.content} col-xl-8 col-lg-8`}
              ></div>
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

export default BlogDetail;
