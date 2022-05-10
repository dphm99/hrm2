import React, { useState } from "react";
import styles from "./Header2.module.css";
import logo from "../../assets/img/logo.png";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
const Header2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setactive] = useState(0);

  const [category, setCategory] = useState("office");
  const Menu = [
      {
        title: "TRANG CHỦ",
        short: "office",
      },
      {
        title: "VỊ TRÍ TUYỂN DỤNG",
        short: "office",
      },
      {
        title: "ĐỊNH HƯỚNG NGHỀ NGHIỆP",
        short: "office",
      },
      {
        title: "ĐAÒ TẠO",
        short: "office",
      },
      {
        title: "TRỢ GIÚP",
        short: "office",
      },
  ]
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
                    : `${styles.header} ${styles.active} row`
                }
              >
                <a href="/" className={`${styles.headerLogo} col-3`}>
                  <img src={logo} alt="" className={styles.logoImg} />
                </a>
                <div className={`d-flex  ${styles.menu_show} col-lg-9`}>
                  <ul
                    className={
                      toggleMenu
                        ? ` ${styles.headerMenu} ${styles.active} col-9`
                        : ` ${styles.headerMenu} col-9}`
                    }
                  >
                    <li
                      className={`${styles.header__fixx} `}
                    >
                      <NavLink to="/" >
                        TRANG CHỦ
                      </NavLink>
                    </li>
                    <li className={styles.header__fixx}>
                      <NavLink to="/tuyen-dung">
                        VỊ TRÍ TUYỂN DỤNG
                      </NavLink>
                    </li>
                    <li className={styles.header__fixx}>
                      <NavLink
                        to="/dinh-huong-nghe-nghiep"
                        
                      >
                        ĐỊNH HƯỚNG NGHỀ NGHIỆP
                      </NavLink>
                    </li>
                    <li className={styles.header__fixx}>
                      <NavLink to="/dao-tao" >
                        ĐÀO TẠO
                      </NavLink>
                    </li>
                    <li className={styles.header__fixx}>
                      <NavLink to="/tro-giup" >
                        TRỢ GIÚP
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div
                  className="navbar-toggler"
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
          <div className="">
            <div className={styles.Header3_name}>
              <p className={styles.header3_p}>
                TUYỂN DỤNG NHÂN SỰ KINH DOANH TOÀN QUỐC TẠI CÁC KÊNH GT, MT ,
                HIỆU THUỐC , CHÀO THẦU ... LÊN TỚI{" "}
                <a className={styles.header3_a}>500</a> NGƯỜI{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
