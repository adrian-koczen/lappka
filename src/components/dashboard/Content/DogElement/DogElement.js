import React from "react";
import styles from "./styles.module.css";
// Component
import InformationElement from "./InformationElement/InformationElement";
// Assets
import dog from "../../../../assets/dog.jpg";
import sex from "../../../../assets/dashboard/sex.svg";

const DogElement = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.dogImage} src={dog} alt="dog" />
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.titleContainer}>
          <div className={styles.dogNameAndRaseContainer}>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.race}>{data.race}</span>
          </div>
          <img src={sex} alt="sex" />
        </div>
        <div className={styles.informationContainer}>
          {data.info.map((el) => {
            return <InformationElement data={el} key={el.id} />;
          })}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Edytuj</button>
        </div>
      </div>
    </div>
  );
};

export default DogElement;
