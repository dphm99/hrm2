import React from "react";
import styles from "../Slider/Slider.module.css";
import "./slider.scss";
import Search from "../Search/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import image1 from "../../assets/img/banner1.png";
import image2 from "../../assets/img/bannerheader1.jpg";
import image3 from "../../assets/img/bannerheader2.jpg";
import image4 from "../../assets/img/bannerheader3.jpg";
function Sliders() {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const mang = [image1, image2, image3,image4];

  let renderSlides = mang.map((ele, index) => {
    return (
      <div
        className={styles.banner}
        key={index}
        style={{ position: "relative" }}
      >
        <img
          style={{ width: "100vw", height: "80vh" }}
          src={ele}
          alt=""
        />
        <div className={styles.overlay}></div>
      </div>
    );
  });
  return (
    <div className="Slider">
      <Search />
      <Slider {...settings}>{renderSlides}</Slider>
    </div>
  );
}

export default Sliders;
