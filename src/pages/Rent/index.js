import React from "react";
import LayoutHome from "layout/layoutHome";

import * as S from "./style";

const Rent = () => {
  return (
    <LayoutHome>
      <S.RentWrapper>
        <S.RentContainer>
          <S.RentInfor>rent</S.RentInfor>
          <S.RentSummary>rent</S.RentSummary>
        </S.RentContainer>
      </S.RentWrapper>
    </LayoutHome>
  );
};

export default Rent;
