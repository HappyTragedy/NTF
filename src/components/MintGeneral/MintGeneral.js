import React from "react";
import WalletClient from "../WalletClient/WalletClient";

const MintGeneral = () => {
  return (
    <>
      <div id="Mint" className="homeContainer">
        <h1>Minimal Mint</h1>
        <div className="modulesContainer">
          <WalletClient />
        </div>
      </div>
    </>
  );
};

export default MintGeneral;
