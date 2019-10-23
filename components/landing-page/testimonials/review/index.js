import React from 'react';
import {
  StyledReview,
  StyledReviewHeader,
  StyledBlockQuote,
  StyledReviewFooter,
  StyledReviewBody,
  StyledReviewImg
} from './styles';
import { Body } from '../../../../styles/common';

const Review = ({ person, position, image, review, currentSlide }) => {
  return (
    <StyledReview currentSlide={currentSlide}>
      <StyledReviewHeader>
        <StyledBlockQuote currentSlide={currentSlide}>&#8220;</StyledBlockQuote>
        <StyledReviewImg>
          <img src={image} alt={person} />
        </StyledReviewImg>
      </StyledReviewHeader>
      <StyledReviewBody>"{review}"</StyledReviewBody>
      <StyledReviewFooter>
        <Body>{person}</Body>
      </StyledReviewFooter>
    </StyledReview>
  );
};
export default Review;
