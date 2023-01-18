import React from "react";
import Dropdown from "components/dropdown";
import { ReactComponent as MarkBold } from "assets/icons/mark-bold.svg";

import * as S from "./style";

const Card = () => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.CardIcon>
          <MarkBold />
        </S.CardIcon>
        <S.CardTitle>Pick - Up</S.CardTitle>
      </S.CardHeader>
      <S.CardOptions>
        <Dropdown label="Locations" title="Select your city" />
        <div className="mt-[16px] w-[2px] h-[48px] bg-[#C3D4E966]"></div>
        <Dropdown />
        <div className="mt-[16px] w-[2px] h-[48px] bg-[#C3D4E966]"></div>
        <Dropdown />
      </S.CardOptions>
    </S.CardContainer>
  );
};

export default Card;
