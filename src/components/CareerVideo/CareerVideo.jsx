import React from "react";
import styles from "./CareerVideo.module.css";
const CareerVideo = () => {
  return (
    <div>
      <div className={`${styles.Career2_banner} container`}>
        <div className="row mb-2">
          <div className={`${styles.Career2_box} col-md-6`}>
            <div
              className={`row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative${styles.Career2_img}`}
            >
                <iframe
                height="300"
                  src="https://www.youtube.com/embed/3V0jdXteJdQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
            </div>
          </div>
          <div className={`${styles.Career2_box} col-md-6`}>
            <div
              className={`row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative${styles.Career2_img}`}
            >
                <iframe
                height="300"
                  src="https://www.youtube.com/embed/BFc0lIgI2lw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerVideo;
