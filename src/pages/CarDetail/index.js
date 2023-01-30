import React from "react";
import LayoutCars from "layout/layoutCars";
import CarInfor from "./parts/carInfor";
import CarSlide from "./parts/slide";

import * as S from "./style";

const CarDetail = () => {
  return (
    <LayoutCars>
      <S.Container>
        <S.InforWrapper>
          <CarSlide />
          <CarInfor />
        </S.InforWrapper>
        <div>Review</div>
      </S.Container>
    </LayoutCars>
  );
};

export default CarDetail;
