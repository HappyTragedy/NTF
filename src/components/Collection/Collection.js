import React from "react";
import styles from "../Collection/Collection.module.css";
import img1 from "../../assets/images/1.png";
import img9 from "../../assets/images/9.png";
import img26 from "../../assets/images/26.png";
import img36 from "../../assets/images/36.png";
import img39 from "../../assets/images/39.png";

const Collection = () => {
  return (
    <div id="Collection">
      <div className={styles["Container"]}>
        <div
          className={styles["item"]}
          style={{ backgroundImage: `url(${img1})` }}
        ></div>

        <div
          className={styles["item"]}
          style={{ backgroundImage: `url(${img9})` }}
        ></div>

        <div
          className={styles["item"]}
          style={{ backgroundImage: `url(${img26})` }}
        ></div>

        <div
          className={styles["item"]}
          style={{ backgroundImage: `url(${img36})` }}
        ></div>

        <div
          className={styles["item"]}
          style={{ backgroundImage: `url(${img39})` }}
        ></div>

        <div className={styles["text"]}>
          <h2>The Traits</h2>
          <p>Each Traveler is unique and is randomly generated from over 150 possible traits, including fun colors, accessories, companions, and more. They're all absolutely adorable, and some are weirder than others; bordering on the sinister. There are also 7 legendaries, which are extremely special. Travelers will be stored as tokens on the Ethereum blockchain and hosted on IPFS.</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
