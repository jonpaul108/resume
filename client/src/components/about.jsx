import React from 'react';
import styles from '../css/about.css';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className={styles.main}>
        <span className={styles.greeting}> HELLO
        </span>
        <div className={styles.info}>
          <span>Software Engineer</span>
            <span>Teacher</span>
          <span>Traveler</span>
          <span>Coffee Roaster</span>
          <span>Former Baby</span>
        </div>
      </div>
    )
  }
}

export default About;