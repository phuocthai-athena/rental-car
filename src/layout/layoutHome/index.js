import React from "react";
import Header from "layout/header";
import Footer from "layout/footer";

import * as S from "./style";

const LayoutHome = (props) => {
  const { children } = props;

  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  );
};

export default LayoutHome;
