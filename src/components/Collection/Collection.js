import React from "react";
import styles from "../Collection/Collection.module.css";
import img1 from "../../assets/1.png";
import img9 from "../../assets/9.png";
import img26 from "../../assets/26.png";
import img36 from "../../assets/36.png";
import img39 from "../../assets/39.png";

const Collection = () => {
  return (
    <>
      <div className={styles["Collection"]}>
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
      </div>

      <div className={styles["text"]}>
        <h3>Fly with them</h3>
        <p>ajvkbawoenfpawiefnaoifendo</p>
      </div>
    </>
  );
};

export default Collection;
