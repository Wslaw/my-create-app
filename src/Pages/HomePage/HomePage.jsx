import React, { useState } from "react";
import FirstPage from "../FirstPage/FirstPage.jsx";
import SecondPage from "../SecondPage/SecondPage.jsx";
import ThirdPage from "../ThirdPage/ThirdPage.jsx";

import styles from "./home-page.module.css";

const HomePage = () => {
    const [isShow, setIsShow] = useState(false);
    const [taskNumber, setTaskNumber]=useState(null)

  const toggleMainMenu = () => {
    setIsShow(!isShow);
  };
  const taskNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handleClick = (number) => {
      setTaskNumber(number)
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{taskNumber ? `These are new development tasks for me: ${taskNumber}` : "These are new development tasks for me:"}</h1>{" "}
      <div className={styles.nav}>
        {/* Мапуємо масив з номерами тасків для генерації кнопок */}
        {taskNumbers.map((taskNumber) => (
          <button onClick= {()=> {handleClick(taskNumber)}} key={taskNumber} className={styles.button} type="button">
            Task {taskNumber}
          </button>
        ))}
      </div>
      {isShow && <FirstPage />}
      {isShow && <SecondPage />}
      {isShow && <ThirdPage />}
      <button className={styles.button} type="button" onClick={toggleMainMenu}>
        Send
      </button>
    </section>
  );
};

export default HomePage;
