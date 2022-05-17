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
      <div className={`${styles.topHeader} `}>
        <div className={`container d-flex align-items-end justify-content-end`}>
          <div className={`${styles.iconHeader} d-flex `}>
            <div className={`${styles.iconDetail} ms-2`}>
              <a
                href="https://www.facebook.com/tuyendungdiligo"
                _target="blank"
              >
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="28px"
                  height="28px"
                >
                  <path d="M24,4C12.972,4,4,12.972,4,24c0,10.006,7.394,18.295,17,19.75V29h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4v-3.632	C21,15.617,23.427,13,27.834,13c1.786,0,3.195,0.124,3.254,0.129C31.604,13.175,32,13.607,32,14.125V17.5c0,0.553-0.448,1-1,1h-2	c-1.103,0-2,0.897-2,2V24h4c0.287,0,0.56,0.123,0.75,0.338c0.19,0.216,0.278,0.502,0.243,0.786l-0.375,3	C31.555,28.624,31.129,29,30.625,29H27v14.75c9.606-1.455,17-9.744,17-19.75C44,12.972,35.028,4,24,4z" />
                </svg>
              </a>
            </div>
            <div className={`${styles.iconDetail} ms-2`}>
              <a
                href="https://www.instagram.com/diligoholdings/"
                _target="blank"
              >
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="28px"
                  height="28px"
                >
                  <path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z" />
                </svg>
              </a>
            </div>
            <div className={`${styles.iconDetail} ms-2`}>
              <a
                href="https://www.youtube.com/channel/UCCKp8CmupA2staY8GlLZkFg"
                _target="blank"
              >
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="28px"
                  height="28px"
                >
                  <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
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
                  <NavLink to="/">TRANG CHỦ</NavLink>
                </li>
                <li>
                  <NavLink to="/tuyen-dung">VỊ TRÍ TUYỂN DỤNG</NavLink>
                </li>
                <li>
                  <NavLink to="/dinh-huong-nghe-nghiep">
                    ĐỊNH HƯỚNG NGHỀ NGHIỆP
                  </NavLink>
                </li>
                <li>
                  <a
                    href="http://daotao.diligo.vn"
                    target="_blank"
                    rel="noreferrer"
                    activeClassName={styles.selected}
                  >
                    ĐÀO TẠO
                  </a>
                </li>
                <li>
                  <NavLink to="/tro-giup">TRỢ GIÚP</NavLink>
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
