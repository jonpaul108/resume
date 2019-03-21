import React from 'react';
import styles from '../css/topPic.css';


const Pic = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <span className={styles.name}> Jonathan</span>
        <span className={styles.lastName}>McNamara</span>
        <span className={styles.resume}> resume</span>
      </div>

      <img alt='woman' src='./woman-red-copy.png' className={styles.image}></img>
    </div>
  )
}

export default Pic;