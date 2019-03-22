import React from 'react';
import styles from '../css/experiences.css';

const Experiences = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Experience</h1>
        <h2>Projects</h2>
        <div className={styles.experienceOne}>
          <h3>System Design for Stock Purchase - Service and Proxy Deployment </h3>
          <h6>Technologies Used: Javascript ES6+, Node.js, Express, PostgreSQL, Nginx, AWS EC2, loader.io, New Relic</h6>
          <h4>➢ Implemented a B-tree to increase read and update speeds by 100% and 300% respectively on PostgreSQL.</h4>
          <h4>➢ Identified bottleneck in node.js when approaching 1000 rps and solved by load balancing with Nginx across three servers, bringing the average read speeds down from 250 ms to 67ms with a 0% error rate.</h4>
        </div>
        <div className={styles.experienceTwo}>
          <h3> Stock-info-Graph- Purchasing page for stocks and related information </h3>
          <h6>Technologies Used: Javascript ES6+, React.js, Node.js, Express, MongoDB, Webpack, AWS EC2/S3, Docker, Jest</h6>
          <h4>➢ Routed all traffic through an Express proxy to allow for parallel development across four separate components</h4>
          <h4>➢ Created lightweight interactive graph using solely React to reduce file size</h4>
          <h4>➢ Modularized CSS and JS utility functions to increase separation of concerns,
          readability, and reusability of code</h4>
        </div>
        <div className={styles.experienceThree}>
          <h3>Korean-Bash - Korean language learning App </h3>
          <h6>Technologies Used​:​ Javascript ES6+, React.js, Node.js, PostgreSQL, Webpack</h6>
          <h4>➢ Designed lightweight, single page app to increase the page load speed.</h4>
          <h4>➢ Created audio quizzes using react refs and logic in javascript for an engaging
          experience set to keep users hooked.</h4>
        </div>
      </div>
    </div>
  )
}

export default Experiences;