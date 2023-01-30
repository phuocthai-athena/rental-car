import React from "react";
import Card from "components/card";
import ButtonIcon from "components/buttonIcon";
import { ReactComponent as MarkPickUp } from "assets/icons/mark-pick-up.svg";
import { ReactComponent as MarkDropOff } from "assets/icons/mark-drop-off.svg";
import { ReactComponent as SwitchIcon } from "assets/icons/switch-light.svg";

import * as S from "./style";

const BookCard = () => {
  return (
    <S.CardContainer>
      <Card title="Pick - Up">
        <MarkPickUp />
      </Card>
      <ButtonIcon type="button">
        <SwitchIcon />
      </ButtonIcon>
      <Card title="Drop - Off">
        <MarkDropOff />
      </Card>
    </S.CardContainer>
  );
};

export default BookCard;
