import React, { useState, useEffect } from 'react';
import { ThemeProvider, base } from '../../../styles/theme';
import { Header, Row, Button, Subheader } from '../../../styles/common';
import { ServiceCircle } from './service-circle';
import {
  StyledServiceCircleWrapper,
  StyledLandingPageHero,
  StyledHeroContentCol,
  StyledHeroContainer
} from './styles';
import { EaseInLeft } from '../../../helpers/triggerAnimations';

import Services from '../landing-hero/services';

const LandingHero = props => {
  const [beginAnimation, triggerAnimationFunc] = useState(false);

  useEffect(() => {
    triggerAnimationFunc(true);
  }, []);

  return (
    <ThemeProvider theme={base}>
      <StyledLandingPageHero>
        <StyledHeroContainer>
          <Row>
            <StyledHeroContentCol>
              <EaseInLeft target="header-left" triggerEaseIn={true}>
                <Header>
                  Ensuring the financial health of the practices we serve.
                </Header>
                <Subheader>
                  The last RCM company you will ever have to partner with.
                </Subheader>
                <Button type="primary">Check us out</Button>
              </EaseInLeft>
            </StyledHeroContentCol>
            <StyledServiceCircleWrapper beginAnimation={beginAnimation}>
              <ServiceCircle />
            </StyledServiceCircleWrapper>
          </Row>
        </StyledHeroContainer>
      </StyledLandingPageHero>
      <Services />
    </ThemeProvider>
  );
};
export default LandingHero;
