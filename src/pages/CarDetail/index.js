import React from "react";
import LayoutCars from "layout/layoutCars";
import CarInfor from "./parts/carInfor";

import * as S from "./style";

const CarDetail = () => {
  return (
    <LayoutCars>
      <S.Container>
        <S.InforWrapper>
          <div className="wrapper slider w-[492px] h-[508px] bg-primaryDefault"></div>
          <CarInfor />
        </S.InforWrapper>
        <div>review</div>
      </S.Container>
    </LayoutCars>
  );
};

export default CarDetail;
