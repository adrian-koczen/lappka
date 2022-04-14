import React from "react";
import styles from "./styles.module.css";

const InformationElement = ({ data }) => {
  return (
    <div className={styles.container}>
      <span className={styles.key}>{data.key}</span>
      <span className={styles.value}>{data.value}</span>
    </div>
  );
};

export default InformationElement;
