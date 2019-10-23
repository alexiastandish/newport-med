import styled from 'styled-components';
import { Box, Body } from '../../../../styles/common';
import { colors } from '../../../../styles/_variables';

const StyledReview = styled(Box)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 40px 25px;
`;

const StyledReviewBody = styled(Body)`
  align-self: flex-end;
  text-indent: -0.4125em;
  margin: 0.5rem;
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

const StyledReviewFooter = styled.div``;

const StyledReviewImg = styled.div`
  height: 100px;
  margin-top: -10px;
  width: 100px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export {
  StyledReview,
  StyledReviewHeader,
  StyledBlockQuote,
  StyledReviewFooter,
  StyledReviewBody,
  StyledReviewImg
};

// ${props =>
//   props.currentSlide ? `  color: ${colors.red}` : `  color: ${colors.blue}`};
