import React from "react";
import styles from "../NavBar/Navbar.module.css";
import WalletButton from "../WalletButton/WalletButton";

const Navbar = () => {
  return (
    <>
      <div className={styles["navbar"]}>
          <div>
            <img src="assets/logo.png" width="" height="" alt="logo-persona" />
          </div>
        <nav className={styles["intro"]}>
          <ul>
            <li>
              <a href="#Collection" id="Check_Collection">
                Collection
              </a>
            </li>
            <li>
              <a href="#Mint" id="Mint_it">
                Mint
              </a>
            </li>
            <li>
              <a href="#Faq" id="FAQ">
                FAQ
              </a>
            </li>
            <li>
              <a href="#About" id="About_us">
                About
              </a>
            </li>
          </ul>
        </nav>
        <WalletButton />
      </div>
    </>
  );
};

export default Navbar;
