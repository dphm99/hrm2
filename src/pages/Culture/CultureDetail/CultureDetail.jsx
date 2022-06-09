import React, { useContext, useEffect, useState } from "react";
import styles from "./CultureDetail.module.css";
import Footer from "../../../components/Footer/Footer";
import Breadcrumbs from "../../../components/BreadCrumb/Breadcrumb";
import { BlogContext } from "../../../components/contexts/ContextBlog";
import Header2 from "../../../components/Header/Header2";
import RecruitSideBar from "../../../components/RecruitSideBar/RecruitSideBar";
import Header from "../../../components/Header/Header";
import { Helmet } from "react-helmet";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon } from "react-share";
import zalo from "../../../assets/img/icon-svg/zalo-logo.jpg";
import Slogan from "../../../components/Header/Slogan";
import axios from "axios";

function CultureDetail() {
  const [dataBlog, setDataBlog] = useState([]);
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
  const [copySuccess] = useState("");
  const [copied, setCopied] = useState(false);
  const [header, setHeader] = useState(true);
  useEffect(() => {
    axios
      .get(`http://hrm.diligo.vn/api/v1/blog-by-id?blog_id=${blogId}`)
      .then((res) => {
        console.log(res);
        setDataBlog(res);
      });
    if (window.innerWidth <= 768) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, []);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }
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
      <Slogan />
      <div className={`${styles.main} container-lg`}>
        <Breadcrumbs
          breadItem={breadcrumItem}
          className={`${styles.Breadcrumbs}`}
        />
        {data.find((ele) => ele.id === Number(blogId)) && (
          <>
            <div className={`row`} style={{ paddingTop: "4rem" }}>
              <div className="col-xl-8 col-lg-8">
                <h1 className={`${styles.title} `}>
                  {data.find((ele) => ele.id === Number(blogId)).title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.find((ele) => ele.id === Number(blogId))
                      .content,
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

        <div className={`${styles.detailsLink} row`}>
          <div className={`${styles.detailsCopy} col-2`}>
            <ContentCopyIcon
              style={{ fontSize: "14px", marginTop: "-2px" }}
            ></ContentCopyIcon>
            <button onClick={copy}>{!copied ? "Copy link" : "Đã copy!"}</button>
            {copySuccess}
          </div>
          <div className={`${styles.detailsIcon} col-10`}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CultureDetail;
