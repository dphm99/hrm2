import React from "react";
import styles from "../Banner/Banner.module.css";
const Banner = () => {
  return (
    <>
      <div className="container">
        <div className={styles.Banner}>
          <h5>NHÂN VIÊN KINH DOANH (NHÃN HÀNG LIPZO)</h5>
          <div class="row mb-2">
            <div class="col-md-6">
              <div class="row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="">
                    <div>
                        <ul>
                            <li> Nơi làm việc: </li>
                            <h6 className={styles.Banner_h6}>Hà Nội, TP.HCM và 64 tỉnh thành khác</h6>
                        </ul>
                        <ul>
                            <li> Nơi làm việc: </li>
                            <h6 className={styles.Banner_h6}>Hà Nội, TP.HCM và 64 tỉnh thành khác</h6>
                        </ul>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">
                    Design
                  </strong>
                  <h3 class="mb-0">Post title</h3>
                  <div class="mb-1 text-muted">Nov 11</div>
                  <p class="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="#" class="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div class="col-auto d-none d-lg-block">
                  <svg
                    class="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
