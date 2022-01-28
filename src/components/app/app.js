import React from "react";
import styles from './app.module.scss';
import Header from "../header";
import Main from "../main/main";
import Sidebar from "../sidebar/sidebar";

function App() {
    return (
     <div className={styles.wrapper}>
        <Header />
        <Sidebar />
        <Main />
     </div>
    )
  }

  export default App