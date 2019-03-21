import React from 'react';
import styles from '../css/app.css';
import Skills from './skills.jsx';
import TopPic from './topPic.jsx';
import About from './about.jsx';
import Interests from './interests.jsx';
import Contact from './contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.main}>
          <TopPic />
          <About />
          <Skills />
          <Interests />
          <Contact />
      </div>
    )
  }
}

export default App;