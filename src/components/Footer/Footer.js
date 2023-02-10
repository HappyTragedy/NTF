import React from "react";
import styles from "./Footer.module.css";
import derecha from "../../assets/images/21.png";
import derecha2 from "../../assets/images/50.png";
import izquierda from "../../assets/images/7.png";
import izquierda2 from "../../assets/images/25.png";
import insta from "../../assets/images/instaredes.png";
import discord from "../../assets/images/discordredes.png";
import OS from "../../assets/images/OSredes.png";
import Twitter from "../../assets/images/Twitterredes.png";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <div className={styles["Content"]}>
          <div className={styles["izquierda"]}>
            <img
              src={izquierda}
              width=""
              height=""
              alt="logo"
              className={styles["img1"]}
            />
            <img
              src={izquierda2}
              width=""
              height=""
              alt="logo"
              className={styles["img2"]}
            />
          </div>
          <div className={styles["centro"]}>
            <div className={styles["nft"]}>
              <h1>Haunted Journeys</h1>
            </div>
            <div className={styles["sub"]}>
              <form>
                <input placeholder="Email"></input>
                <button>Subscribe</button>
              </form>
            </div>
            <div className={styles["redes"]}>
              <a href="https://www.instagram.com">
                <img src={insta} alt="Instagram" className={styles["insta"]} />
              </a>
              <a href="https://www.discord.com">
                <img src={discord} alt="Discord" className={styles["disc"]} />
              </a>
              <a href="https://www.opensea.io">
                <img src={OS} alt="OpenSea" className={styles["OS"]} />
              </a>
              <a href="https://www.twitter.com">
                <img src={Twitter} alt="Twitter" className={styles["tw"]} />
              </a>
            </div>
            <div className={styles["credits"]}>
              <p>
                <strong>The Haunted Journeys Project Website</strong> was design
                by{" "}
                <a href="https://www.instagram.com/miicamelia/">
                  Fernández Micaela Belén
                </a>
                .<p>This is part of a college final exam.</p>
              </p>
            </div>
          </div>
          <div className={styles["derecha"]}>
            <img
              src={derecha}
              width=""
              height=""
              alt="logo"
              className={styles["img3"]}
            />
            <img
              src={derecha2}
              width=""
              height=""
              alt="logo"
              className={styles["img4"]}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
