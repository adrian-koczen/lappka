import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
// Components
import TopBar from "./TopBar/TopBar";
import DogElement from "./DogElement/DogElement";
// Data
import dogs from "../../../assets/dogs.json";

const Content = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(dogs);
  }, [data]);
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Zwierzęta w schronisku</span>
        </div>
        <div className={styles.dogsContainer}>
          {data !== null &&
            data.map((el) => {
              return <DogElement key={el.id} data={el} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Content;
