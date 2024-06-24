import React, { useState } from "react";
import styles from "./header.module.css";
import MainMenu from "../MainMenu/MainMenu";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

const toggleMainMenu = () => {
  setIsShow(!isShow); 
};

  return (
    <header className={styles.section}>
     {!isShow && <h2> То Є хедер</h2>}
      {isShow && <MainMenu />}
      <button className={styles.button} type="button" onClick={toggleMainMenu}>
        Send
      </button>
    </header>
  );
};

export default Header;
