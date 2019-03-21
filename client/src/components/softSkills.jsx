import React from 'react';
import styles from '../css/softSkills.css';

class SoftSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        ['Communication', 5],
        ['Adaptibility', 5],
        ['Teamwork', 5],
        ['Problem Solving', 4],
        ['Leadership', 3]
      ]
    }
  }

  render() {
    const {
      skills
    } = this.state;
    return (
      <div className={styles.main}>
          <span className={styles.techLabel}> Soft Skills</span>
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

export default SoftSkills;