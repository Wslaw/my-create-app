import React, { useState } from "react";
import styles from "./first-task.module.css";

const FirstTask = () => {
  const [primary, setPrimary] = useState("");
  const [unic, setUnic] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setPrimary(event.target.value);
    setUnic(false);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Var-1
    // const arr = primary.split("");
    let isUnique = true;

    // for (let i = 0; i < primary.length; i++) {
    //   for (let j = i + 1; j < primary.length; j++) {
    //     if (primary[i] === primary[j]) {
    //       isUnique = false;
    //       break;
    //     }
    //   }
    //   if (!isUnique) {
    //     break;
    //   }
    // }
    // if (isUnique) {
    //   setUnic(isUnique);
    // }
    // setIsSubmitted(true);

    // var-2
    for (let i = 0; i < primary.length; i++) {
      const element = primary[i];

      if (primary.lastIndexOf(element) !== i) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      setUnic(isUnique);
    }
    setIsSubmitted(true);
  };

  // var 3

    
    
    
    return (
      <section>
        <div className={styles.app}>
          <header className={styles.header}>
            <h1 className={styles.title}> перевірка рядка на унікальність</h1>{" "}
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.lable}>Введення рядка</label>
              <input value={primary} onChange={handleChange} onSubmit={handleSubmit} className={styles.input} placeholder="Введите рядок символов"></input>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </form>
            <div className={styles.message}>{isSubmitted && <h2 className={styles.txt}>{unic ? "Усі елементи унікальні" : "Є елементи, що повторюються"}</h2>}</div>{" "}
          </header>
        </div>
        );       </section>
    );
};

export default FirstTask;
