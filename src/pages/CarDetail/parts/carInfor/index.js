import React from "react";
import Button from "components/button";
import LikeToogle from "components/likeToogle";
import RatingButton from "components/rating";

import * as S from "./style";

const CarInfor = () => {
  return (
    <S.CarInforContainer>
      <S.CarInforHeader>
        <S.CarInforTitle>Nissan GT - R</S.CarInforTitle>
        <LikeToogle />
      </S.CarInforHeader>
      <S.CarInforReview>
        <RatingButton readonly initialRating={4} />
        <S.CarInforTextReview>440+ Reviewer</S.CarInforTextReview>
      </S.CarInforReview>
      <S.CarInforDesc>
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track". NISMO
        has become the embodiment of Nissan's outstanding performance, inspired
        by the most unforgiving proving ground, the "race track".
      </S.CarInforDesc>
      <S.CarInforDataWrapper>
        <S.CarInforData>
          <S.CarInforKey>Type Car</S.CarInforKey>
          <S.CarInforValue>Sport</S.CarInforValue>
        </S.CarInforData>
        <S.CarInforData>
          <S.CarInforKey>Seat</S.CarInforKey>
          <S.CarInforValue>2 Person</S.CarInforValue>
        </S.CarInforData>
        <S.CarInforData>
          <S.CarInforKey>Engine</S.CarInforKey>
          <S.CarInforValue>Manual</S.CarInforValue>
        </S.CarInforData>
        <S.CarInforData>
          <S.CarInforKey>Fuel</S.CarInforKey>
          <S.CarInforValue>70L</S.CarInforValue>
        </S.CarInforData>
      </S.CarInforDataWrapper>
      <S.CarInforBottom>
        <S.CarInforPriceWrapper>
          <S.CarInforPrice>
            $80.00 / <S.CarInforDay>day</S.CarInforDay>
          </S.CarInforPrice>
          <S.CarInforInitialPrice>$100.00</S.CarInforInitialPrice>
        </S.CarInforPriceWrapper>
        <Button type="button">Rent Now</Button>
      </S.CarInforBottom>
    </S.CarInforContainer>
  );
};

export default CarInfor;
