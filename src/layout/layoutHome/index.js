import React from "react";
import Header from "layout/header";

import * as S from "./style";

const LayoutHome = (props) => {
  const { children } = props;

  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
};

export default LayoutHome;
