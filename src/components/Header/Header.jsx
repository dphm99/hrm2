import React,{useState} from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logomau.png";
import ListIcon from '@mui/icons-material/List';
// import fbIcon from "../../assets/svg/FacebookMini Icon.svg";
// import inIcon from "../../assets/svg/InstagramMini Icon.svg";
// import liIcon from "../../assets/svg/linkedin.svg";
// import yoIcon from "../../assets/svg/YoutubeMini Icon.svg";
// import zaIcon from "../../assets/svg/ZaloMini Icon.svg";

function Header() {
  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topHeader}>
        {/* <ul className={styles.icon}>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
          <li>
            <img src="../../assets/img/FacebookMini Icon.png" alt="" />
          </li>
        </ul> */}
      </div>
      <div className={styles.headerBox}>
        <div className="container">
          <div className={toggleMenu? `${styles.header}  ${styles.active}  d-flex`
          :`${styles.header}  ${styles.active}  d-flex`}>
            <a href="/" className={`${styles.headerLogo} col-lg-3`}>
              <img src={logo} alt="" className={styles.logoImg} />
            </a>
            <div className={`d-flex  ${styles.menu_show} col-lg-9`}>
              <ul
                className={ toggleMenu ?` ${styles.headerMenu} ${styles.active} col-lg-12 col-md-12 col-sm-12`
                :` ${styles.headerMenu} col-lg-12 col-md-12 col-sm-12`}
              >
                <li>
                  <a href="/">TRANG CHỦ</a>
                </li>
                <li>
                  <a href="/vi-tri-tuyen-dung">VỊ TRÍ TUYỂN DỤNG</a>
                </li>
                <li>
                  <a href="/">ĐỊNH HƯỚNG NGHỀ NGHIỆP</a>
                </li>
                <li>
                  <a href="/">ĐÀO TẠO</a>
                </li>
                <li>
                  <a href="/">TRỢ GIÚP</a>
                </li>
              </ul>
               <ListIcon 
               className={styles.menu_icon}
               onClick={e=> setToggleMenu(!toggleMenu) }
               >
               </ListIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
