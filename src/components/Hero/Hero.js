import React from "react";
import styles from "../Hero/Hero.module.css";
import WalletButton from "../WalletButton/WalletButton";

const Hero = () => {
  return (
    <section id={styles["heroNavbar"]}>
      <div className={styles["navbar"]}>
        <div className={styles["logo"]}>
          <img src="assets/logo.png" width="" height="" alt="logo-persona" />
        </div>
        <div className={styles["intro"]}>
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
        </div>
        <WalletButton />
      </div>

      <div className={styles["container"]}>
        <h2 className={styles["title"]}>Welcome to</h2>
        <h1 className={styles["subtitle"]}>HAUNTED JOURNEYS</h1>
      </div>
    </section>
  );
};

export default Hero;
