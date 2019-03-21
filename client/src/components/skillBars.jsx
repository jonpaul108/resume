import React from 'react';
import styles from '../css/skillBars.css';

class TechSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        ['React', 5],
        ['Javascript(ES6+)', 4],
        ['Redux', 4],
        ['Node.js', 4],
        ['Express', 4],
        ['CSS', 3],
        ['HTML5', 3],
        ['PostgreSQL', 3],
        ['MongoDB', 3],
        ['AWS', 2],
        ['Docker', 2],
      ]
    }
  }

  render() {
    const {
      skills
    } = this.state;
    return (
      <div className={styles.main}>
          <span className={styles.techLabel}> Technical Skills</span>
          {skills.map((el) => {
            let skill = el[0];
            let fill = el[1];
            let barCount = 0;
            let bars = [];
            while (barCount < 5) {
              if (barCount < fill) {
                bars.push(<span className={styles.skillBarFill}></span>)
              } else {
                bars.push(<span className={styles.skillBarNoFill}></span>)
              }
              barCount ++;
            }
            return <div className={styles.skillContainer}>
              <div className={styles.skillText}>{el[0]}:
          </div>
          <div className={styles.bars}>{bars.map((el) => {
              return el;
            })}
          </div>
            </div>

          })}
      </div>
    )
  }
}

export default TechSkills;