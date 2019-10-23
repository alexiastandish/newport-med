import React, { useState } from 'react';
import { Container, Body, Button } from '../../../../styles/common';
import ScrollIntoView from '../../../render-props/scroll-into-view';
import { EaseInBottom } from '../../../../helpers/triggerAnimations';
import {
  StyledBoxesRow,
  StyledServiceBox,
  StyledServiceIcon,
  StyledBoxSubheader
} from './styles';

const Services = props => {
  const [easeUpBoxesAnimation, easeUpBoxesAnimationFunc] = useState(false);
  return (
    <Container>
      <ScrollIntoView returnFunc={easeUpBoxesAnimationFunc}>
        <StyledBoxesRow>
          <EaseInBottom triggerEaseIn={easeUpBoxesAnimation}>
            <StyledServiceBox columns={2}>
              <StyledServiceIcon>
                <img
                  src="/images/home/services/moneyicon.png"
                  alt="revenue-cycle-management"
                />
              </StyledServiceIcon>
              <StyledBoxSubheader>Revenue cycle management</StyledBoxSubheader>
              <Body>
                Financial expectations drive our processes and IT platforms,
                including feedback + client education.
              </Body>
              <Button type="link-btn-inverted">Learn More</Button>
            </StyledServiceBox>
          </EaseInBottom>

          <EaseInBottom>
            <StyledServiceBox columns={2}>
              <StyledServiceIcon>
                <img
                  src="/images/home/services/cloudicon.png"
                  alt="revenue-cycle-management"
                />
              </StyledServiceIcon>
              <StyledBoxSubheader>Cloud based services</StyledBoxSubheader>
              <Body>
                Our offerings are global, 24/7, HIPAA Compliant on the cloud.
              </Body>
              <Button type="link-btn-inverted">Learn More</Button>
            </StyledServiceBox>
          </EaseInBottom>

          <EaseInBottom>
            <StyledServiceBox columns={2}>
              <StyledServiceIcon>
                <img
                  src="/images/home/services/gears.png"
                  alt="revenue-cycle-management"
                />
              </StyledServiceIcon>
              <StyledBoxSubheader>Solutions integration</StyledBoxSubheader>
              <Body>
                Revenue focused IT solutions. Home-grown Analytics Dashboard.
                Robotic process automation (Bot’s).
              </Body>
              <Button type="link-btn-inverted">Learn More</Button>
            </StyledServiceBox>
          </EaseInBottom>

          <EaseInBottom>
            <StyledServiceBox columns={2}>
              <StyledServiceIcon>
                <img
                  src="/images/home/services/medicalicon.png"
                  alt="revenue-cycle-management"
                />
              </StyledServiceIcon>
              <StyledBoxSubheader>Practice advocates</StyledBoxSubheader>
              <Body>
                Though our services are comprehensive and complex, we make them
                simple for you.
              </Body>
              <Button type="link-btn-inverted">Learn More</Button>
            </StyledServiceBox>
          </EaseInBottom>
        </StyledBoxesRow>
      </ScrollIntoView>
    </Container>
  );
};
export default Services;
