import React from "react";
import PropTypes from "prop-types";
import Dropdown from "components/dropdown";

import * as S from "./style";

const Card = (props) => {
  const { children, title } = props;

  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.CardIcon>{children}</S.CardIcon>
        <S.CardTitle>{title}</S.CardTitle>
      </S.CardHeader>
      <S.CardOptions>
        <Dropdown label="Locations" title="Select your city"></Dropdown>
        <S.LineSeparate />
        <Dropdown label="Date" title="Select your date"></Dropdown>
        <S.LineSeparate />
        <Dropdown label="Time" title="Select your time"></Dropdown>
      </S.CardOptions>
    </S.CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Card;
