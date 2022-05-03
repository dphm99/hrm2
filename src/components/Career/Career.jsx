import React from "react";
import styles from "./Career.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Career() {
  const cardList = [
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
    {
      text: "Một số cách viết CV cho sinh viên mới ra trường",
      img: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    },
  ];
  const settings = {
    //   autoplay:true,
    dots: true,
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const CardItem = (props) => {
    return (
      <div class="col">
        <div className={styles.Career__card}>
          <div className={styles.Career__img}>
            <div>
              <div className={styles.Career_imge}>
                <img src={props.src} alt="" />
              </div>
            </div>
          </div>

          <div className>
            <div className={styles.Career__titlename}>
              <h5 className={styles.Career__title}>Cách để viết CV</h5>
            </div>
            <div className={styles.Career__tikitiki}>
              <p className={styles.Career__tiki}>
                {props.text}
                {/* <h8 className={styles.Career__h8}>Đọc thêm</h8> */}
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group"></div>
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
        <div class="row">
          <Slider {...settings}>
            {cardList.map((e, index) => {
              return <CardItem src={e.img} text={e.text} key={index} />;
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
