import React from "react";
import styles from "../NavBar/Navbar.module.css";
import WalletButton from "../WalletButton/WalletButton";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className={styles["navbar"]}>
        <div>
          <img src={logo} width="" height="" alt="logo-persona" className={styles["logo"]}/>
        </div>
        <nav className={styles["intro"]}>
          <ul>
            <li>
              <a href="#About" id="About_us">
                About
              </a>
            </li>
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
          </ul>
        </nav>
        <WalletButton />
      </div>
    </>
  );
};

export default Navbar;
