import React from 'react';
import Hero from '../components/Hero/Hero';
import MintGeneral from '../components/MintGeneral/MintGeneral';
import Footer from '../components/Footer/Footer';
import Collection from '../components/Collection/Collection';
import About from '../components/About/About';

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <MintGeneral />
      <About />
      <Footer />
    </>
  );
};

export default Home;
