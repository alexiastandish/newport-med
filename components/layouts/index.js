import React, { useState } from 'react';
import { StyledBodyWrapper, StyledLayoutWrapper } from './styles';
import Head from '../head';
import Header from '../header';

const Layout = props => {
  const { navLight, children } = props;

  const [state, setState] = useState({
    menuOpen: false
  });

  const handleMenuToggle = () => {
    setState(prevState => ({
      ...prevState,
      menuOpen: !prevState.menuOpen
    }));
  };

  return (
    <StyledLayoutWrapper menuOpen={state.menuOpen}>
      <Head {...props} />
      <Header
        handleMenuToggle={handleMenuToggle}
        menuOpen={state.menuOpen}
        navLight={navLight}
      />
      <StyledBodyWrapper>{children}</StyledBodyWrapper>
      {/* <Footer /> */}
    </StyledLayoutWrapper>
  );
};

export default Layout;
