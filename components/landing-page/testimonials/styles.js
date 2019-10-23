import styled from 'styled-components';
import { Hero, Container } from '../../../styles/common';
// import { colors } from '../../../styles/_variables';

const StyledGradientHero = styled(Hero)`
  // background-size: ${props => (props.inView ? `100% 400%` : `400% 400%`)};
  background-repeat: no-repeat;
  display: flex;
  // max-width: 100vw;
  // max-height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledReviewWrapper = styled.div`
  height: 325px;
  ${props => props.currentSlide && 'height: 375px'};
  ${props => !props.currentSlide && 'margin-top: 25px'};
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
`;

const StyledTestimonialsContainer = styled(Container)`
  padding-right: 0px;
  padding-left: 0px;
  max-width: 100%;
`;

export { StyledGradientHero, StyledReviewWrapper, StyledTestimonialsContainer };

// &:before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;

// background: ${colors.blue};
// transition: background 800ms;
// `;
// z-index: 1;
// background: ${props =>
//   props.inView
//     ? `linear-gradient(to bottom, transparent 5%,  transparent 25%,  ${colors.blue} )`
//     : `linear-gradient(to bottom, transparent, ${colors.blue})`};
// z-index: -1;
// }

// ${props => !props.inView && `background: ${colors.lightblue}`};
