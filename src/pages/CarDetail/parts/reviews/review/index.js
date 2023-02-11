import RatingButton from "components/rating";
import React from "react";

import * as S from "./style";

const Review = (props) => {
  const { commentInfor } = props;

  return (
    <S.ReviewWrapper>
      <S.ReviewHeader>
        <S.ReviewerInfor>
          <S.ReviewerAvatar>
            <img src={commentInfor.image} alt="avatar1" />
          </S.ReviewerAvatar>
          <S.ReviewerDetail>
            <S.ReviewerName>{commentInfor.reviewer_name}</S.ReviewerName>
            <S.ReviewerJob>{commentInfor.reviewer_job}</S.ReviewerJob>
          </S.ReviewerDetail>
        </S.ReviewerInfor>
        <S.ReviewInfor>
          <S.ReviewDay>{commentInfor.review_date}</S.ReviewDay>
          <S.ReviewRating>
            <RatingButton readonly initialRating={commentInfor.review_rating} />
          </S.ReviewRating>
        </S.ReviewInfor>
      </S.ReviewHeader>
      <S.ReviewComment>{commentInfor.review_desc}</S.ReviewComment>
    </S.ReviewWrapper>
  );
};

export default Review;
