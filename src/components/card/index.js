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
        <Dropdown />
        <div className="mt-[16px]"></div>
        <Dropdown />
        <Dropdown />
      </S.CardOptions>
    </S.CardContainer>
  );
};

export default Card;
