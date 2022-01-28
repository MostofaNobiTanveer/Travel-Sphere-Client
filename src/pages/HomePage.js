import React from 'react';
import { Feature, FeatureBlogs, Hero } from '../components';
import ScrollToTop from '../utils/ScrollToTop';

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Feature />
      <FeatureBlogs />
    </>
  );
};

export default HomePage;
