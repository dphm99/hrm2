import React from "react";
import styles from "./Career2.module.css";
import seongon from "../../assets/img/icon-svg/seongon-2.jpg"

const Career2 = () => {
  return (
    <div>
      <div  className={`${styles.Career2_banner} container`}>   
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
              <div className={styles.Career2_img}>
                <img  src={seongon} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
            <div className={styles.Career2_img}>
                <img  src={seongon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career2;
