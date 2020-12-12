import React, { useState } from "react";
import styles from "./styles/App.module.css";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Feed from "./components/Feed.js";
import { useStateValue } from "./StateProvider";

function App() {
  const {
    state: { user },
  } = useStateValue();

  if (!user) {
    return <Login />;
  }

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appBody}>
        <Feed />
      </div>
    </div>
  );
}

export default App;
