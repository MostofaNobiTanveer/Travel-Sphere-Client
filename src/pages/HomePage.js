import React from 'react';
import { Content, Feature, Hero } from '../components';
import ScrollToTop from '../utils/ScrollToTop';

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Feature />
      <Content />
    </>
  );
};

export default HomePage;
