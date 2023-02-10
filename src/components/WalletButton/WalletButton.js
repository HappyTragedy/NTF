import React from "react";
import {
  useOnboardContext,
  useAddress,
  useOnboard,
  useWallet,
} from "../../contexts/OnboardContext";
import { truncateWeb3Address } from "../../services/onboard/helpers";
import billetera from "../../assets/images/wallet.png";
import styles from "./WalletButton.module.css";

const WalletButton = () => {
  const { linkWallet, resetWallet } = useOnboardContext();
  const onboard = useOnboard();
  const wallet = useWallet();
  const address = useAddress();

  return (
    <button
      className={styles["connect"]}
      onClick={
        !wallet.provider ? linkWallet : address ? resetWallet : linkWallet
      }
      disabled={onboard ? false : true}
    >
      <img src={billetera} alt="wallet" />
      {!wallet.provider
        ? `Connect wallet`
        : address
        ? `${truncateWeb3Address(address)}`
        : `Connect wallet`}
    </button>
  );
};

export default WalletButton;
