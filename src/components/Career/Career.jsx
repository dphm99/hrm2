import React, { useContext, useEffect } from "react";
import styles from "./Career.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BlogContext } from "../contexts/ContextBlog";

function Career() {
  const {data} = useContext(BlogContext);
  console.log(data)
  // const cardList = [
  //   {
  //     title: "Cách để viết CV",
  //     text: "Một số cách viết CV cho sinh viên mới ra trường",
  //     img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  //   },
  //   {
  //     title: "Cách để viết CV",
  //     text: "Một số cách viết CV cho sinh viên mới ra trường",
  //     img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  //   },
  //   {
  //     title: "Cách để viết CV",
  //     text: "Một số cách viết CV cho sinh viên mới ra trường",
  //     img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  //   },
  //   {
  //     title: "Cách để viết CV",
  //     text: "Một số cách viết CV cho sinh viên mới ra trường",
  //     img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  //   },
  //   {
  //     title: "Cách để viết CV",
  //     text: "Một số cách viết CV cho sinh viên mới ra trường",
  //     img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  //   },
  //   {
  //     title: "Cách để viết CV",
  //     text: "Một số cách viết CV cho sinh viên mới ra trường",
  //     img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  //   },
  // ];
  const settings = {
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CardItem = (props) => {
    return (
      
      <div className={`${styles.Career_col} col px-3`}>
        <div className={styles.Career__card}>
          <div className={styles.Career__img}>
            <div>
              <div className={styles.Career_imge}>
                <img src={props.src} alt="" />
              </div>
            </div>
          </div>

          <div className={styles.Wrapper}>
            <div className={styles.Career__titlename}>
              <h5 className={styles.Career__title}>{props.title}</h5>
            </div>
            <div className={styles.Career__tikitiki}>

              <p className={styles.Career__tiki} dangerouslySetInnerHTML={{ __html: `${props.text}` }}>
                
                {/* <h8 className={styles.Career__h8}>Đọc thêm</h8> */}

              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container">
        <div className={styles.Career__h4}>
          <h4>ĐỊNH HƯỚNG NGHỀ NGHỆP</h4>
        </div>
        <div className="row">
          <Slider {...settings}>
            {data &&
              data.map((e, index) => {
                return (
                  <CardItem
                    title={e.title}
                    src={e.avatar}
                    text={e.content}
                    key={index}
                  />
                );
              })}
          </Slider>
        </div>
        <div className={styles.Career__banner}>
          <img src="https://dulichvietnam.com.vn/du-lich-anh/wp-content/uploads/2020/04/ngon-ngu-anh-1.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Career;
