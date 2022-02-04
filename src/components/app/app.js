import React from "react";
import styles from './app.module.scss';
import Header from "../header";
import Main from "../main/main";
import Sidebar from "../sidebar/sidebar";
// import apiClient from "../apiClient";

function App() {

   // useEffect(() => {
   //    apiClient.getSearchId()
   // })

    return (
     <div className={styles.wrapper}>
        <Header />
        <Sidebar />
        <Main />
     </div>
    )
  }

  export default App