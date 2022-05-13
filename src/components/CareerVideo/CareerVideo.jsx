import React from 'react'
import styles from "./CareerVideo.module.css";
import seongon2 from "../../assets/img/icon-svg/banner5.jpg"

const CareerVideo = () => {
  return (
    <div>
      <div className={`${styles.Career2_banner} container`}>
        <div className="row mb-2">
          <div className={`${styles.Career2_box} col-md-6`}>
            <div className={`row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative${styles.Career2_img}`}>
              <img src={seongon2} alt='/' />
            </div>
          </div>
          <div className={`${styles.Career2_box} col-md-6`}>
            <div className={`row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative${styles.Career2_img}`}>
              <img src={seongon2} alt='/' />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CareerVideo