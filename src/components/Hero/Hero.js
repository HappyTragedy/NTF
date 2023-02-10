import React from "react";
import styles from "../Hero/Hero.module.css";
import Navbar from "../NavBar/Navbar";

const Hero = () => {
  return (
    <section id={styles["heroNavbar"]}>
      <Navbar />

      <div className={styles["container"]}>
        <h2 className={styles["title"]}>Join our</h2>
        <h1 className={styles["subtitle"]}>HAUNTED JOURNEYS</h1>
      </div>
    </section>
  );
};

export default Hero;
