import React from 'react';
import styles from '../css/languageSkill.css';

class LanguageSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        ['English(Native)', 5],
        ['Japanese', 3],
        ['Korean', 1]
      ]
    }
  }

  render() {
    const {
      skills
    } = this.state;
    return (
      <div className={styles.main}>
          <span className={styles.techLabel}> Language Skills</span>
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

export default LanguageSkills;