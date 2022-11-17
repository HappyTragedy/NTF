import React from "react";
import styles from "../Collection/Collection.module.css";

const Collection = () => {
  return (
    <section id="Collection"
      style={{ backgroundColor: `yellow` }}
      className={styles["carruselprincipal"]}
    >
      <article>
        <div>
          <h4>Hello, my name is</h4>
          <h1>JACKIE WILSON</h1>
          <p>
            Our ships have
            <a href="contact.html">completed</a>
            their scan of the area and found nothing. If the
            <a href="contact.html">Millenium Falcon</a>
            went into light-speed, it'll be on the other side of the galaxy by
            now. He says he's the
            <a href="contact.html">property</a>
            of Obi-Wan Kenobi, a resident of these parts. And it's a private
            message for him.
          </p>
          <div>
            <a className="boton" href="works.html">
              SELECTED WORKS
            </a>
            <a className="boton2" href="about.html">
              MORE ABOUT ME
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Collection;
