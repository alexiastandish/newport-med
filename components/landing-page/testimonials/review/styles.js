import styled from "styled-components";
import { Box, Body } from "../../../../styles/common";
import { colors } from "../../../../styles/_variables";

const StyledReview = styled(Box)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 40px 25px;
`;

const StyledReviewBody = styled(Body)`
  align-self: flex-end;
  text-indent: -0.4125em;
  margin: 0.5rem;
  text-align: left;
  margin-top: 30px;
`;

const StyledReviewHeader = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const StyledBlockQuote = styled.h2`
  ${props =>
    props.currentSlide ? `  color: ${colors.red}` : `  color: ${colors.gray}`};
  opacity: ${props => (props.currentSlide ? `1` : `.5`)};
  font-size: 80px;
  margin-bottom: -30px;
  margin-right: 20px;
`;

const StyledReviewImg = styled.div`
  height: 100px;
  margin-top: -10px;
  width: 100px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50px;
  background: ${colors.blue};

  img {
    height: 100%;
    object-fit: cover;
    ${props =>
      props.currentSlide
        ? `opacity: 1`
        : `opacity: .2; filter: grayscale(100%)`};
  }
`;

const StyledPerson = styled.div`
  position: absolute;
  right: 50px;
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: left;

  p:nth-of-type(1) {
    margin-bottom: 0px;
    margin-top: 0px;
    ${props =>
      props.currentSlide
        ? `  color: ${colors.red}`
        : `  color: ${colors.blue}`};
  }
  p:nth-of-type(2) {
    font-size: 14px;
    line-height: 20px;
    color: ${colors.gray};
  }
`;

export {
  StyledReview,
  StyledReviewHeader,
  StyledBlockQuote,
  StyledReviewBody,
  StyledReviewImg,
  StyledPerson
};

// ${props =>
//   props.currentSlide ? `  color: ${colors.red}` : `  color: ${colors.blue}`};
