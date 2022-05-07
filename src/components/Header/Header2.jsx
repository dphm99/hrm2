import React, { useState } from "react";
import styles from "./Header2.module.css";
import logo from "../../assets/img/logo.png";
import ListIcon from '@mui/icons-material/List';

const Header2 = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div>
      <div className={styles.headerWrapper}>
        <div className={styles.Header2}>
          <div className={styles.headerBox}>
            <div className="container">
              <div className={toggleMenu? `${styles.header} ${styles.active} row`
                    :  `${styles.header} ${styles.active} row`}>
                <a href="/" className={`${styles.headerLogo} col-3`}>
                  <img src={logo} alt="" className={styles.logoImg} />
                </a>
                <div className={`d-flex  ${styles.menu_show} col-lg-9`}>
                <ul className={toggleMenu ?` ${styles.headerMenu} ${styles.active} col-9`
                       : ` ${styles.headerMenu} col-9}`}>
                  <li className={`${styles.header__fixx} ${styles.header__fixloi}` }>
                    <a className={styles.headerMenuA} href="/">TRANG CHỦ</a>
                  </li>
                  <li className={styles.header__fixx}>
                    <a href="/">VỊ TRÍ TUYỂN DỤNG</a>
                  </li>
                  <li className={styles.header__fixx}>
                    <a className={styles.headerMenuA} href="/">ĐỊNH HƯỚNG NGHỀ NGHIỆP</a>
                  </li>
                  <li className={styles.header__fixx}>
                    <a className={styles.headerMenuA} href="/">ĐÀO TẠO</a>
                  </li>
                  <li className={styles.header__fixx}>
                    <a className={styles.headerMenuA} href="/">TRỢ GIÚP</a>
                  </li>
                </ul>
                </div>
                {/* <ListIcon 
               className={styles.menu_icon}
               onClick={e=> setToggleMenu(!toggleMenu)}
               >
               </ListIcon> */}
               <div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
               <ListIcon 
               className={styles.menu_icon}
               onClick={e=> setToggleMenu(!toggleMenu)}
               >
               </ListIcon>
      </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Header3}>
        <div className="">
           <div className={styles.Header3_name}>
           <p className={styles.header3_p}>TUYỂN DỤNG NHÂN SỰ KINH DOANH TOÀN QUỐC TẠI CÁC KÊNH GT, MT , HIỆU THUỐC , CHÀO THẦU ... LÊN TỚI <a className={styles.header3_a}>500</a> NGƯỜI </p>
           </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Header2;
