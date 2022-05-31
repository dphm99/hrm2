import React, { useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import  "../ScrollButton/ScrollButton.scss"


function ScrollButton() {
  const [isShow, setIsShow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });
  return (
    <div
      onClick={handleScrollToTop}
      className={isShow ? "scroll-btn show" : "scroll-btn"}
    >
      <div className="scroll-btn__icon">
        <ArrowUpwardIcon />
      </div>
    </div>
  );
}

export default ScrollButton;
