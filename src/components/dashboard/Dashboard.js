import React from "react";
import styles from "./styles.module.css";
// Compoonents
import Navigation from "./Navigation/Navigation";
import Content from "./Content/Content";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <Content />
    </div>
  );
};

export default Dashboard;
