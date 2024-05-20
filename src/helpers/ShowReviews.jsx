import React from 'react';
import {
  IconThumb16,
  ReviewsContent,
  ReviewsTxt,
  ReviewsHeader,
  ReviewsAvatar,
  ReviewsAvatarInitial,
  ReviewerNameRate,
  ReviewerName,
  ReviewerRate,
} from '../AdvertForm/index';

import star from 'img/star.svg';

const ShowReviews = modal => {
  const reviewerName = modal.reviewer_name;
  const firstLetter = reviewerName.charAt(0).toUpperCase();
  return (
    <ReviewsContent>
      <ReviewsHeader>
        <ReviewsAvatar>
          <ReviewsAvatarInitial>{firstLetter}</ReviewsAvatarInitial>
        </ReviewsAvatar>
        <ReviewerNameRate>
          <ReviewerName>{modal.reviewer_name}</ReviewerName>
          <ReviewerRate>
            <IconThumb16 src={star} alt="review star" />
            {modal.reviewer_rating}
          </ReviewerRate>
        </ReviewerNameRate>
      </ReviewsHeader>
      <ReviewsTxt>{modal.comment}</ReviewsTxt>
    </ReviewsContent>
  );
};

export default ShowReviews;

/* 
                  {modal.rating} ({modal.reviews.length} Reviews) */
