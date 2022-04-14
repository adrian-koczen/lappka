import React from "react";
import styles from "./styles.module.css";

const NavigationTab = ({ title, icon, active }) => {
  return (
    <div
      className={`${styles.container} ${
        active ? styles.active : styles.notActive
      }`}
    >
      <img className={styles.icon} src={icon} alt="menuTab" />
      <span>{title}</span>
    </div>
  );
};

export default NavigationTab;
