import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
export default App;
