import React from "react";
import ReactCardFlipper from "react-card-flipper";
import styles from "./About.module.css";
import MF from "../../assets/images/MF.jpg";
import GG from "../../assets/images/GG.jpg";
import D from "../../assets/images/derecha.png";
import I from "../../assets/images/izquierda.png";
import insta from "../../assets/images/instagram.png";
import LI from "../../assets/images/LinkedIn.png";

const About = () => {
  return (
    <div id="About">
      <div id={styles["About"]}>
        <img src={I} alt="traveler" className={styles["izquierda"]} />
        <div className={styles["info"]}>
          <h2 className={styles["about"]}>Start your journey</h2>
          <p>
            These travelers move by air in the company of multiple beings or
            objects. Haunted Journeys is a collection of adorable animated
            travelers drenched in the spirit of Halloween. They have gone
            through so many dimensions, interspersing the real world with the
            fictional one; reason for which some of these travelers stole the
            appearance of well-known characters from childhood. <br />
            The Haunted Journeys universe is ever-expanding. While the universe
            expands, our brand grows, and collectors can expect exclusive access
            to the latest products, merchandise and events through ownership.
            Owning a Traveler allows you to vote on community-driven features,
            products and events. This makes our roadmap collaborative to be
            decided by the project founders and Traveler holders via the
            Hauntedbank. The Hauntebank is our community treasury which boasts
            over $5m USD and is used to fund these experiences.
          </p>
        </div>
        <img src={D} alt="traveler" className={styles["derecha"]} />
      </div>

      <div className={styles["theTeam"]}>
        <h2>Meet The Team</h2>

        <div className={styles["team"]}>
          <ReactCardFlipper
            width="329px"
            height="329px"
            behavior="hover"
            className={styles["container"]}
          >
            <div className={styles["card1"]}>
              <img src={MF} alt="img1" className={styles["img1"]} />
            </div>
            <div className={styles["card2"]}>
              <h2>Micaela Fernandez</h2>
              <ul>
                <li>Founder</li>
                <li>Haunted Journeys Creator</li>
                <li>Traits animator</li>
                <li>Discord Manager</li>
              </ul>
              <div className={styles["redes"]}>
                <a href="https://www.instagram.com/miicamelia/" alt="Instagram">
                  <img src={insta} alt="Insta" />
                </a>
                <a
                  href="https://www.linkedin.com/in/micaela-fernández-b28156189/"
                  alt="LinkedIn"
                >
                  <img src={LI} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </ReactCardFlipper>

          <ReactCardFlipper
            width="329px"
            height="329px"
            behavior="hover"
            className={styles["container"]}
          >
            <div className={styles["card1"]}>
              <img src={GG} alt="img1" className={styles["img1"]} />
            </div>
            <div className={styles["card2"]}>
              <h2>Giuliano Giovanola</h2>
              <ul>
                <li>Founder</li>
                <li>Strategic Advisor</li>
                <li>Developer</li>
                <li>Musician</li>
              </ul>
              <div className={styles["redes"]}>
                <a
                  href="https://www.instagram.com/giulianofg_/"
                  alt="Instagram"
                >
                  <img src={insta} alt="Insta" />
                </a>
                <a
                  href="https://www.linkedin.com/in/giulianogiovanola/"
                  alt="LinkedIn"
                >
                  <img src={LI} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </ReactCardFlipper>
        </div>
      </div>
    </div>
  );
};

export default About;
