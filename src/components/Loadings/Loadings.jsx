import React from 'react'
import styles from '../../components/Loadings/Loading.module.css'

const Loadings = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.loader}>
            <div className={styles.leaderDot}></div>
            <div className={styles.leaderDot}></div>
            <div className={styles.leaderDot}></div>
            <div className={styles.leaderDot}></div>
            <div className={styles.leaderDot}></div>
            <div className={styles.leaderDot}></div>
            {/* <div className={styles.leaderText}></div> */}
        </div>
    </div>
  )
}

export default Loadings