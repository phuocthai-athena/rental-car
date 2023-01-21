import React from "react";
import Header from "layout/header";

import * as S from "./style";
import Footer from "layout/footer";

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
