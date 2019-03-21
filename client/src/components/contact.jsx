import React from 'react';
import styles from '../css/contact.css';
const Contact = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span>Other Info</span>
        <div className={styles.info}>
          <span>From: Bakersfield, California</span>
          <span>Age: 31</span>
          <span>Education:
            <img></img>
            <img></img>
          </span>
          <span>
            Places lived:
            Bakersfield, CA
            Davis, CA
            San Francisco, CA
            Seongju, South Korea
            Busan, South Korea
            Katsuura, Tokushima-ken, Japan
          </span>
          <a>
            Find me on linked in!
          </a>
        </div>

      </div>

    </div>
  )
}

export default Contact;