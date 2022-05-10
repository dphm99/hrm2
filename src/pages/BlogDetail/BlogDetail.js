import React, { useContext } from "react";
import styles from "./BlogDetail.module.css";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import { BlogContext } from "../../components/contexts/ContextBlog";
import Header2 from "../../components/Header/Header2";
import RecruitBlog from "../../components/RecuritBlog/RecruitBlog";
function BlogDetail() {
  const blogIndex = window.location.hash.split("#")[1];
  const blogId = window.location.hash.split("#")[2];
  const { data } = useContext(BlogContext);
  console.log(data[blogIndex]);
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
      title: "Quy trình tuyển dụng",
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
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[blogIndex].content,
                }}
                className={`${styles.content} col-xl-8 col-lg-8`}
              ></div>
              <div className={`${styles.recruit} col-xl-4 col-lg-4`}>
                <RecruitBlog className={`${styles.RecruitBlog}`} />
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
