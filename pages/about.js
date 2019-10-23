import React from 'react';
import Layout from '../components/layouts';
import { Header, Hero } from '../styles/common';
import { ThemeProvider, base } from '../styles/theme';
//import './.css';

const About = props => {
  return (
    <Layout>
      <ThemeProvider theme={base}>
        <Hero>
          <Header>About</Header>
        </Hero>
      </ThemeProvider>
    </Layout>
  );
};
export default About;
