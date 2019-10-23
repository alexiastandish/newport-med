import React from 'react';

import Layout from '../components/layouts';
import LandingHero from '../components/landing-page/landing-hero';
import OurProcess from '../components/landing-page/our-process';
import Testimonials from '../components/landing-page/testimonials';

const Home = ({ page }) => {
  return (
    <Layout page={page}>
      <LandingHero />
      <OurProcess />
      <Testimonials />
    </Layout>
  );
};
export default Home;
