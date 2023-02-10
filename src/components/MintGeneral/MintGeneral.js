import React from "react";
import WalletClient from "../WalletClient/WalletClient";
import styles from "./MintGeneral.module.css";
import muestra from "../../assets/images/Mint.png";

const MintGeneral = () => {
  return (
    <div id="Mint">
      <h1>Mint your Traveler</h1>
      <div className={styles["Container"]}>
        <img src={muestra} alt="Mint" />
        <div id={styles["Mint"]}>
          <div className={styles["modulesContainer"]}>
            <WalletClient />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintGeneral;
