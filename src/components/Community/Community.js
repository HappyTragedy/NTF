import React from "react";
import style from "./Community.module.css";
import join from "../../assets/images/community.png";
import discord from "../../assets/images/discord.png";

const Community = () => {
  return (
    <div className={style["container"]}>
      <div className={style["img"]}>
        <img src={join} alt="nftcom" />
      </div>
      <div className={style["info"]}>
        <h1>Join the Haunted Journeys Community</h1>
        <p>
          Chat with the community, ask questions, get involved in events and
          more!
        </p>
        <a href="https://www.discord.com">
          <button>
            <img src={discord} alt="discord" />
            Join Discord
          </button>
        </a>
      </div>
    </div>
  );
};

export default Community;
