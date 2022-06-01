import React, { useContext } from "react";
import styles from "./Career.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BlogContext } from "../contexts/ContextBlog";
import { Link } from "react-router-dom";
import { toSlug } from "../../components/extensions/toSlug";
import "./Career.scss";
import longBanner from "../../assets/img/banner3.jpg";
// import imgCV from "../../assets/img/icon-svg/banner6.jpg";

function Career() {
  const { data } = useContext(BlogContext);
  const styleArrow = { 
    background: 'rgb(192 59 70 / 21%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:'4',
}
  function SamplePrevArrow(props) {
    const { className , onClick } = props;
    return (
        <div
            className={className}
            style={styleArrow}
            onClick={onClick}>
              <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1={19} y1={12} x2={5} y2={12} /><polyline points="12 19 5 12 12 5" /></svg>
        </div>
    );
  }
function SampleNextArrow(props) {
    const { className , onClick } = props;
    return (
        <div
            className={className}
            style={styleArrow}
            onClick={onClick}>
              <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
        </div> 
    );
  }
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <>
      <div className="container">
        <div className={styles.Career__h4}>
          <h4>ĐỊNH HƯỚNG NGHỀ NGHIỆP</h4>
        </div>
        <div className="row career">
          <Slider {...settings}>
            {data &&
              data.map((e, index) => {
                return (
                  <Link
                    key={index}
                    to={{
                      pathname: `/dinh-huong-nghe-nghiep/${toSlug(e.title)}`,
                      search: `#${index}#${e.id}`,
                    }}
                    className={`${styles.link}`}
                  >
                    <CardItem
                      title={e.title}
                      src={e.avatar}
                      key={index}
                    />
                  </Link>
                );
              })}
          </Slider>
        </div>
        <div className={styles.Career__banner}>
          <img src={longBanner} alt="/" />
        </div>
      </div>
    </>
  );
}

export default Career;
