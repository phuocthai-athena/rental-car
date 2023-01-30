import React, { useState } from "react";

import beach from "assets/images/beach.jpg";
import building from "assets/images/building.jpg";
import goldenEagle from "assets/images/golden-eagle.jpg";
import noImage from "assets/images/no-image.png";

import * as S from "./style";

const listImages = [
  {
    id: 1,
    imgURI: beach,
  },
  {
    id: 2,
    imgURI: building,
  },
  {
    id: 3,
    imgURI: goldenEagle,
  },
];

const CarSlide = () => {
  return (
    <S.CarSlideContainer>
      <S.CarSlideCarousel></S.CarSlideCarousel>
      <S.CarSlideDot></S.CarSlideDot>
    </S.CarSlideContainer>
  );
};

export default CarSlide;
