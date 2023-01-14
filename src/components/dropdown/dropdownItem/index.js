import React from "react";

import * as S from "./style";

const DropdownItem = () => {
  return (
    <S.DropdownItemContainer>
      <S.DropdownItem>Javascrip</S.DropdownItem>
      <S.DropdownItem>Node js</S.DropdownItem>
      <S.DropdownItem>React js</S.DropdownItem>
    </S.DropdownItemContainer>
  );
};

export default DropdownItem;
