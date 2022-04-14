import React from "react";
import styles from "./styles.module.css";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Dashboard</span>
      <div className={styles.userContainer}>
        <div className={styles.avatar} />
        <div className={styles.userInfo}>
          <span className={styles.username}>Robert G.</span>
          <span className={styles.companyName}>Nazwa firmy</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
