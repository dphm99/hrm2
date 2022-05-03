import React from "react";
import styles from "../Slider/Slider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import demoImage from "../../assets/img/banner1.png";
function Sliders() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let renderSlides = [1, 2, 3, 4, 5, 6, 7, 8].map((ele, index) => {
    return (
      <div className={styles.banner} key={index}>
        <img style={{width:"100vw",height:"80vh"}} src={demoImage} alt="" />
      </div>
    );
  });
  return (
    <div className="App">
      <Slider {...settings}>{renderSlides}</Slider>
    </div>
  );
}

export default Sliders;
