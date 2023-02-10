import React, { useState } from "react";
import FAQ from "./FAQ";
import styles from "./FAQ.module.css";

function Data() {
  const [faqs, setfaqs] = useState([
    {
      question: "When is launch?",
      answer:
        "Pre-sale (Whitelist only): January 20th, 2023.  |  Public sale: February 07, 2023.",
      open: false,
    },
    {
      question: "What is the total supply?",
      answer: "You will have a total of 10,000 travelers to mint.",
      open: false,
    },
    {
      question: "How can I buy a Traveler?",
      answer:
        "You have to connect a Wallet like MetaMask and have enough ETH to cover the cost of mint + gas (transaction fee of the Ethereum Blockchain).",
      open: false,
    },
    {
      question: "Why buy a Traveler from Haunted Journeys?",
      answer:
        "If you are in WEB3, you know everything is based around art. If you like the art, community and team, then buy it just for that. Not to mention, Haunted Journeys does come with some sweet utility & member only benefits.",
      open: false,
    },
    {
      question: "Gas fees are incredibly high, what's happening?",
      answer:
        "If you're seeing incredibly high gas fees it could be that the Ethereum Blockchain is having high gas costs because of a high demand. It is also a known issue that MetaMask goes crazy if you don't have enough funds to mint a Traveler + pay for the gas fees, rendering a crazy amount of gas fees. Make sure to have at least 0.55 or 0.6 ETH to mint 1 Traveler.",
      open: false,
    },
    {
      question: "Other questions?",
      answer:
        "Follow us on Twitter and join our Discord discord.gg/HauntedJourneys, we are active on both and will answer your questions as quickly as we can!",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div id="Faq">
      <div id={styles["Faq"]}>
        <h1>FAQ</h1>
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;
