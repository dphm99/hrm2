import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logomau.png";
import ListIcon from "@mui/icons-material/List";
// import fbIcon from "../../assets/svg/FacebookMini Icon.svg";
// import inIcon from "../../assets/svg/InstagramMini Icon.svg";
// import liIcon from "../../assets/svg/NavLinkedin.svg";
// import yoIcon from "../../assets/svg/YoutubeMini Icon.svg";
// import zaIcon from "../../assets/svg/ZaloMini Icon.svg";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topHeader}></div>
      <div className={styles.headerBox}>
        <div className="container">
          <div
            className={
              toggleMenu
                ? `${styles.header}  ${styles.active}  d-flex`
                : `${styles.header}  ${styles.active}  d-flex`
            }
          >
            <Link to="/" className={`${styles.headerLogo} col-lg-3`}>
              <img src={logo} alt="" className={styles.logoImg} />
            </Link>
            <div className={`d-flex  ${styles.menu_show} col-lg-9`}>
              <ul
                className={
                  toggleMenu
                    ? ` ${styles.headerMenu} ${styles.active} col-lg-12 col-md-12 col-sm-12`
                    : ` ${styles.headerMenu} col-lg-12 col-md-12 col-sm-12`
                }
              >
                <li>
                  <NavLink to="/">
                    TRANG CHỦ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tuyen-dung">
                    VỊ TRÍ TUYỂN DỤNG
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dinh-huong-nghe-nghiep">
                    ĐỊNH HƯỚNG NGHỀ NGHIỆP
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dao-tao">
                    ĐÀO TẠO
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tro-giup">
                    TRỢ GIÚP
                  </NavLink>
                </li>
                <li
                  className={`d-block d-lg-none d-sm-block ${styles.active} ${styles.searchMb}`}
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
              <ListIcon
                className={styles.menu_icon}
                onClick={(e) => setToggleMenu(!toggleMenu)}
              ></ListIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
