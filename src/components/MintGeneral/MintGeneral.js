import React from "react";
import WalletClient from "../WalletClient/WalletClient";
import styles from "../MintGeneral/MintGeneral.module.css"

const MintGeneral = () => {
  return (
    <>
      <div id={styles["Mint"]}>
        <h1>Mint your Traveler</h1>
        <div className="modulesContainer">
          <WalletClient />
        </div>
      </div>
    </>
  );
};

export default MintGeneral;
