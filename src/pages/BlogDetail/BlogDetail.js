import React, { useContext } from 'react'
import styles from "./BlogDetail.module.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumbs from '../../components/BreadCrumb/Breadcrumb'
import { BlogContext } from '../../components/contexts/ContextBlog'
import Header2 from '../../components/Header/Header2'
function BlogDetail() {
  const blogIndex = window.location.hash.split("#")[1];
  const { data } = useContext(BlogContext);
  
  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false
    },

    {
      href: "/vi-tri-tuyen-dung",
      title: "Vị trí tuyển dụng",
      isActive: false
    },

    {
      href: "/",
      title: "Quy trình tuyển dụng",
      isActive: true
    },

  ]
  return (
    <div className={``} >
      <Header2
      />
      <div className={`${styles.main} container-lg`} >

        <Breadcrumbs
          breadItem={breadcrumItem}
          className={`${styles.Breadcrumbs}`}
        />
        {data[0] &&
          <>
            <div className={`row`}>
              <h1
                className={`${styles.title} col-xl-8`}
                style={{ margin: `5rem 0` }}

              >
                {data[0].title}</h1>
            </div>
            <div className={`row`}>
              <div
                dangerouslySetInnerHTML={{ __html: data[0].content }}
                className={`${styles.content} col-xl-8`}
              >
              </div>
              <div
                className={`${styles.recruit} col-xl-4`}
              >
              </div>
            </div>
          </>
        }


      </div>
      <Footer />
    </div >
  )
}

export default BlogDetail