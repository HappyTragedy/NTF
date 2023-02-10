import React from "react";
import Hero from "../components/Hero/Hero";
import MintGeneral from "../components/MintGeneral/MintGeneral";
import Footer from "../components/Footer/Footer";
import Collection from "../components/Collection/Collection";
import About from "../components/About/About";
import FAQ from "../components/FAQ/Data";
import Community from "../components/Community/Community";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Collection />
      <MintGeneral />
      <FAQ />
      <Community />
      <Footer />
    </>
  );
};

export default Home;
