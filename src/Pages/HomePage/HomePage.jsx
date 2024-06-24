import React from "react";
import { useState } from "react";
import FirstPage from "../FirstPage/FirstPage.jsx";
import SecondPage from "../SecondPage/SecondPage.jsx";
import ThirdPage from "../ThirdPage/ThirdPage.jsx";

import styles from "./home-page.module.css";

const HomePage = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <section className={styles.section}>
      <h1>Home Page</h1>
      {isShow && <FirstPage />}
      {isShow && <SecondPage />}
      {isShow && <ThirdPage />}
    </section>
  );
};

export default HomePage;
