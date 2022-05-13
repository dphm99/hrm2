import React, { useState } from "react";
import styles from "./Header2.module.css";
import logo from "../../assets/img/logo.png";
import banner from "../../assets/img/icon-svg/banner.jpg";
import {NavLink } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
const Header2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [index, setIndex] = useState(0); 

   

  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.Header2}>
          <div className={styles.headerBox}>
            <div className="container">
              <div
                className={
                  toggleMenu
                    ? `${styles.header} ${styles.active} row`
                    : `${styles.header} row`
                }
              >
                <a href="/" className={`${styles.headerLogo} col-3`}>
                  <img src={logo} alt="" className={styles.logoImg} />
                </a>
                <div className={`d-flex  ${styles.menu_show} col-lg-9`}>
                  <ul
                    className={
                      toggleMenu
                        ? `${styles.headerMenu} ${styles.active} col-9`
                        : `${styles.headerMenu} col-9`
                    }
                    onClick={() => {
                      setToggleMenu(toggleMenu);
                    }}
                  >
                    <NavLink
                      className={0 === index ? `${styles.active}` : ``}
                      to="/"
                    >
                      TRANG CHỦ
                    </NavLink>
                    <NavLink
                      className={1 === index ? `${styles.active}` : ``}
                      to="/tuyen-dung"
                    >
                      VỊ TRÍ TUYỂN DỤNG
                    </NavLink>

                    <NavLink
                      className={2 === index ? `${styles.active}` : ``}
                      to="/dinh-huong-nghe-nghiep"
                    >
                        ĐỊNH HƯỚNG NGHỀ NGHIỆP
                    </NavLink>
                    <NavLink
                      className={3 === index ? `${styles.active}` : ``}
                      to="/dao-tao"
                    >
                      ĐÀO TẠO
                    </NavLink>
                    <NavLink
                      className={4 === index ? `${styles.active}` : ``}
                      to="/tro-giup"
                    >
                      TRỢ GIÚP
                    </NavLink>
                  </ul>
                </div>
                <div
                  className={`${styles.header2Nav} navbar-toggler`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarsExample01"
                  aria-controls="navbarsExample01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <ListIcon
                    className={styles.menu_icon}
                    onClick={(e) => setToggleMenu(!toggleMenu)}
                  ></ListIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Header3}>
          <img src={banner} alt='/' className={`w-100`}/>
        </div>
      </div>
    </>
  );
};

export default Header2;
