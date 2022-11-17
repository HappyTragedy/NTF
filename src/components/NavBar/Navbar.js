import React from "react";
import styles from "./Navbar.module.css";
import WalletButton from "../WalletButton/WalletButton";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="divheader">
          <div>
            <a>
              <img
                src="assets/logo.png"
                width=""
                height=""
                alt="logo-persona"
              />
            </a>
          </div>
          <nav className="intro">
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
      </div>
    </>
  );
};

export default Navbar;
