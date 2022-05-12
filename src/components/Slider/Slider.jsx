import React from "react";
import styles from "../Slider/Slider.module.css";
import "./slider.scss";
import Search from "../Search/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import demoImage from "../../assets/img/banner1.png";
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

  let renderSlides = [1, 2, 3].map((ele, index) => {
    return (
      <div
        className={styles.banner}
        key={index}
        style={{ position: "relative" }}
      >
        <img
          style={{ width: "100vw", height: "80vh" }}
          src={demoImage}
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
