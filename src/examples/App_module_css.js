import React from "react";
import styles from "./App.module.css";

const AppEx = () => {
  return (
    <div className={styles.App}>
      <Job salary={90000} position="Senior SDE" company="Amazon" />
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1 className={styles.name}>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default AppEx;
