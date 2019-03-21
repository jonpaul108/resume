import React from 'react';
import styles from '../css/skills.css';
import TechSkills from './skillBars.jsx';
import SoftSkills from './softSkills.jsx';
import LanguageSkills from './LanguageSkills.jsx';

const Skills = (props) => {
  return (
    <div className={styles.main}>
      <TechSkills />
      <div className={styles.verticalBorder}></div>
      <div className={styles.softLanguageContainer}>
        <SoftSkills />
        <div className={styles.horizontalBorder}></div>
        <LanguageSkills />
      </div>
    </div>
  )
}

export default Skills;