import React, { useState} from "react";
import styles from "./Header2.module.css";
import logo from "../../assets/img/logo.png";
import banner from "../../assets/img/icon-svg/banner.jpg";
import { NavLink } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";
const Header2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const changeBackground = () => {
    if (window.screenY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);


  return (
    <>
      <div
        className={
          navbar
            ? `${styles.headerWrapper} ${styles.activeNav}`
            : `${styles.headerWrapper}`
        }
      >
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
                <Link to="/" className={`${styles.headerLogo} col-3`}>
                  <img src={logo} alt="" className={styles.logoImg} />
                </Link>
                <div className={`d-flex  ${styles.menu_show} col-lg-9`}>
                  <ul
                    className={
                      toggleMenu
                        ? `${styles.headerMenu} ${styles.active} col-9`
                        : `${styles.headerMenu} col-9`
                    }
                  >
                    <li>
                      <NavLink to='/'>TRANG CHỦ</NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName={styles.selected}
                        to="/van-hoa"
                      >
                        VĂN HÓA
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName={styles.selected}
                        to="/tuyen-dung"
                      >
                         TUYỂN DỤNG
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/dinh-huong-nghe-nghiep"
                        activeClassName={styles.selected}
                      >
                        ĐỊNH HƯỚNG NGHỀ NGHIỆP
                      </NavLink>
                    </li>
                    <li>
                      <a  href="http://daotao.diligo.vn" target="_blank" rel="noreferrer" activeClassName={styles.selected}>
                        ĐÀO TẠO
                      </a>
                    </li>
                    <li>
                      <NavLink to="/tro-giup" activeClassName={styles.selected}>
                        TRỢ GIÚP
                      </NavLink>
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
