import React, { useState } from "react";
import styles from "./Header2.module.css";
import logo from "../../assets/img/logo.png";
import banner from "../../assets/img/icon-svg/banner.jpg";
import { NavLink } from "react-router-dom";
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
                    <li
                      className={0 === index ? `${styles.active}` : ``}
                      onClick={() => {
                        setIndex(0);
                      }}
                    >
                      <NavLink to="/">TRANG CHỦ</NavLink>
                    </li>
                    <li
                      className={1 === index ? `${styles.active}` : ``}
                      onClick={() => {
                        setIndex(1);
                      }}
                    >
                      <NavLink to="/tuyen-dung">VỊ TRÍ TUYỂN DỤNG</NavLink>
                    </li>

                    <li
                      className={2 === index ? `${styles.active}` : ``}
                      onClick={() => {
                        setIndex(2);
                      }}
                    >
                      <NavLink to="/dinh-huong-nghe-nghiep">
                        ĐỊNH HƯỚNG NGHỀ NGHIỆP
                      </NavLink>
                    </li>
                    <li
                      className={3 === index ? `${styles.active}` : ``}
                      onClick={() => {
                        setIndex(3);
                      }}
                    >
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="http://daotao.diligo.vn"
                      >
                        ĐÀO TẠO
                      </a>
                    </li>
                    <li
                      className={4 === index ? `${styles.active}` : ``}
                      onClick={() => {
                        setIndex(4);
                      }}
                    >
                      <NavLink to="/tro-giup">TRỢ GIÚP</NavLink>
                    </li>
                    <li
                      className={`d-block d-lg-none d-sm-block ${styles.active}`}
                    >
                      <form action="/tuyen-dung/" className={styles.formInputMb}>
                        <input
                          type="text"
                          className={styles.inputMb}
                          placeholder="Tìm kiếm"
                          name="q"
                        />
                        <button type="submit">Tìm kiếm</button>
                      </form>
                    </li>
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
          <img src={banner} alt="/" className={`w-100`} />
        </div>
      </div>
    </>
  );
};

export default Header2;
