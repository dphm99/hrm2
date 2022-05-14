import React from "react";
import styles from "./Career2.module.css"; 
import leftImage from '../../assets/img/banner1.jpg'
import rightImage from '../../assets/img/banner2.jpg'
const Career2 = () => {
  return (
    <>
      <div className={`${styles.Career2_banner} container`}>
        <div className="row mb-2">
          <div className={`${styles.Career2_box} col-md-6`}>
            <div className={`row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative ${styles.Career2_img}`}>
              <img src={leftImage} alt='/' />
            </div>
          </div>
          <div className={`${styles.Career2_box} col-md-6`}>
            <div className={`row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative ${styles.Career2_img}`}>
              <img src={rightImage} alt='/' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career2;
