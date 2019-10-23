import React, { useState } from 'react';
import { ThemeProvider, lightGradient, base } from '../../../styles/theme';
import {
  Header,
  Container,
  Row,
  Button,
  Subheader
} from '../../../styles/common';
import { EaseInLeft, EaseInRight } from '../../../helpers/triggerAnimations';

import { StyledProcessHero, StyledCol, StyledContentCol } from './styles';
import ScrollIntoView from '../../render-props/scroll-into-view';

const OurProcess = props => {
  const [state, setAnimation] = useState(false);
  return (
    <ThemeProvider theme={lightGradient(base)}>
      <ScrollIntoView returnFunc={setAnimation}>
        <StyledProcessHero>
          <Container>
            <Row>
              <StyledCol>
                <EaseInLeft triggerEaseIn={state} target="gears-left">
                  <img
                    src="/images/home/our-process-gears.png"
                    alt="our-process"
                  />
                </EaseInLeft>
              </StyledCol>
              <StyledContentCol>
                <EaseInRight triggerEaseIn={state} target="no-suprises">
                  <Header>No Surprises!</Header>
                  <Subheader>Our Process: The NewportMed Way</Subheader>
                  <Button type="primary">Learn more about our process</Button>
                </EaseInRight>
              </StyledContentCol>
            </Row>
          </Container>
        </StyledProcessHero>
      </ScrollIntoView>
    </ThemeProvider>
  );
};
export default OurProcess;
