import React from "react";
import LayoutCars from "layout/layoutCars";
import CarInfor from "./parts/carInfor";
import CarSlide from "./parts/slide";
import Reviews from "./parts/reviews";
import RecommendCar from "./parts/recommend";
import { ReactComponent as BackIcon } from "assets/icons/arrow-left.svg";

import * as S from "./style";
import { Link } from "react-router-dom";

const CarDetail = () => {
  return (
    <LayoutCars>
      <S.Container>
        <S.BackButton>
          <Link to="/cars" className="back-button">
            <BackIcon />
            &nbsp;Back
          </Link>
        </S.BackButton>
        <S.InforWrapper>
          <CarSlide />
          <CarInfor />
        </S.InforWrapper>
        <S.ReviewWrapper>
          <Reviews />
        </S.ReviewWrapper>
        <S.RecommendWrapper>
          <RecommendCar />
        </S.RecommendWrapper>
      </S.Container>
    </LayoutCars>
  );
};

export default CarDetail;
