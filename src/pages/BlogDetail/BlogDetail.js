import React, { useContext, useEffect, useState } from "react";
import styles from "./BlogDetail.module.css";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import { BlogContext } from "../../components/contexts/ContextBlog";
import Header2 from "../../components/Header/Header2";
import RecruitSideBar from "../../components/RecruitSideBar/RecruitSideBar";
import Header from "../../components/Header/Header";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon } from "react-share";
import zalo from "../../assets/img/icon-svg/zalo-logo.jpg";
import RelatedPost from "./RelatedPost/RelatedPost";
function BlogDetail() {
  const blogId = window.location.hash.split("#")[2];
  const { data } = useContext(BlogContext);
  const currentURL = window.location.href;
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
      {!header && <Header />}
      {header && <Header2 />}
      <div className={`${styles.main} container-lg`}>
        <Breadcrumbs
          breadItem={breadcrumItem}
          className={`${styles.Breadcrumbs}`}
        />
        {data.find((ele) => ele.id === Number(blogId)) && (
          <>
            <div className={`row`}>
              <h1
                className={`${styles.title} col-xl-8 col-lg-8`}
                style={{ margin: `5rem 0` }}
              >
                {data.find((ele) => ele.id === Number(blogId)).title}
              </h1>
            </div>
            <div className={`row`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.find((ele) => ele.id === Number(blogId)).content,
                }}
                className={`${styles.content} col-xl-8 col-lg-8`}
              ></div>
              <div className={`${styles.recruit} col-xl-4 col-lg-4`}>
                <RecruitSideBar className={`${styles.RecruitSideBar}`} />
              </div>
            </div>
            <div className={`${styles.detailsIcon} col-6 `}>
              <FacebookShareButton url={currentURL}>
                <FacebookIcon size={28} />
              </FacebookShareButton>

              <img
                src={zalo}
                style={{ width: "30px", marginRight: "6px" }}
                alt="/"
              />

              <LinkedinShareButton url={currentURL}>
                <LinkedinIcon size={28} />
              </LinkedinShareButton>
            </div>
          </>
        )}
        <section>
          <div className={styles.relatedPost}>
            {console.log(
              data.filter((ele) => ele.quiz_ids.name === "Văn hóa Diligo")
            )}
            {data
              .filter((ele) => ele.quiz_ids[0].name === "Văn hóa Diligo")
              .map(
                (ele, index) =>
                  index < 4 && (
                    <div className={styles.relatedPostItem} key={index}>
                      <img
                        className={styles.relatedPostImg}
                        src={ele.avatar}
                        alt=""
                      />
                      <div className={styles.relatedPostInfo}>
                        <p className={styles.title}>{ele.title}</p>
                        <p
                          className={styles.short}
                          dangerouslySetInnerHTML={{ __html: ele.description }}
                        ></p>
                      </div>
                    </div>
                  )
              )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
