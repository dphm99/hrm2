import React from 'react'
import styles from './FAQ.module.css'
function Card({title,icon}) {
  return (
    <div 
    className={`d-flex justify-content-center align-items-center flex-column px-4 py-3 
                ${styles.cardBox}`}
    >
        {icon}
        <h5 className="text-center" style={{fontSize:'.9rem'}}>{title}</h5>
        </div>
  )
}

export default Card