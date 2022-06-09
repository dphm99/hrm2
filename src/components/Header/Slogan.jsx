import React from 'react'
import banner from "../../assets/img/icon-svg/banner.jpg";

import styles from "./Header2.module.css"
function Slogan() {
    return (
        <div className={styles.Header3}>
            <img src={banner} alt="/" className={`w-100`} />
        </div>
    )
}

export default Slogan