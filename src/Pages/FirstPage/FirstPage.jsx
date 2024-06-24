import React from 'react';


import FirstTask from '../../components/FirstTask/FirstTask';
import styles from "./first-page.module.css";

const FirstPage = () => {
  return (
    <div className={styles.item}>
          <h2>First Page</h2>
          <FirstTask/>
    </div>
  )
}

export default FirstPage
