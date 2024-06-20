import styles from "./App.module.css";
import React, { useState } from "react";

function App() {
  const [primary, setPrimary] = useState("");
  const [unic, setUnic] = useState(false);


  const handleChange = (event) => {
    setPrimary(event.target.value);
    setUnic(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const arr = primary.split("");
    let isUnique = true;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
          isUnique = false;
          break;
        }
      }
        if (!isUnique) {
          break;
        }
      }
      if (isUnique) {
        setUnic(true);
      }
      else
      {
        setUnic(false);
      }
    };

    return (
      <div className={styles.app}>
        <header className="header">
          <h1 className={styles.title}> {unic ? "Все элементы уникальны" : "Есть повторяющиеся элементы"}</h1>
          <p className={styles.txt}> перевірка рядка на унікальність</p>{" "}
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.lable}>Ввод рядка</label>
            <input value={primary} onChange={handleChange} onSubmit={handleSubmit} className={styles.input} placeholder="Введите рядок символов"></input>
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </form>
          <p className={styles.txt}>Current input: {primary}</p>
          <p className={styles.txt}>Unic: {unic ? "Все элементы уникальны" : "Есть повторяющиеся элементы"}</p>
        </header>
      </div>
    );
  }
  export default App;
