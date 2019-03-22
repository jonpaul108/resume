import React from 'react';
import styles from '../css/contact.css';
const Contact = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.education}>
          <span className={styles.educText} > Education </span>
          <div className={styles.logos}>
            <img className={styles.davis} alt='davis_logo' src='https://upload.wikimedia.org/wikipedia/commons/f/f3/The_University_of_California_Davis.svg'></img>
            <img className={styles.hack} alt='hack_logo' src='https://static1.squarespace.com/static/522a22cbe4b04681b0bff826/t/581cc65fe4fcb5a68ecd940c/1478280803080/hrhq-avatar.png?format=1500w'></img>
          </div>
            </div>
          <div className={styles.extLinks}>
            <span className={styles.extLinkText}> External Links </span>
            <div className={styles.linkContainer}>
            <a  className={styles.link} href='https://www.linkedin.com/in/jonathan-mcnamara-843803175'>
                <img className={styles.linkedIn} src='https://i0.wp.com/nativeadvertisinginstitute.com/wp-content/uploads/2015/03/LinkedIn.png?fit=1024%2C768&ssl=1' alt='linkedIn'></img>
              </a>
              <a  className={styles.link} href='https://github.com/jonpaul108'>
                <img className={styles.gitHub} src='https://d1qb2nb5cznatu.cloudfront.net/startups/i/60436-22967c4ce89dbdbd4a8d49b090509a78-medium_jpg.jpg?buster=1517982458' alt='gitHub'></img>
              </a>
              </div>
          </div>
      </div>

    </div>
  </div>
  )
}

export default Contact;