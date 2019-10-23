import styled from 'styled-components';
import { Column, Hero, Container } from '../../../styles/common';

const StyledServiceCircleWrapper = styled(Column)`
  opacity: 0;
  padding: 75px;
  ${props => props.beginAnimation && `opacity: 1`};
  transition: 1200ms ease-in;
`;

const StyledLandingPageHero = styled(Hero)`
  background-image: url('/images/home/home-hero-bg.png');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const StyledHeroContentCol = styled(Column)`
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledHeroContainer = styled(Container)`
  padding-bottom: 25px;
`;

export {
  StyledServiceCircleWrapper,
  StyledLandingPageHero,
  StyledHeroContentCol,
  StyledHeroContainer
};
