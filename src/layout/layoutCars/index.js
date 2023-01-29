import React from "react";
import Header from "layout/header";
import Footer from "layout/footer";
import Filter from "layout/filter";

import * as S from "./style";

const LayoutCars = (props) => {
  const { children } = props;

  const params = window.location.pathname;

  return (
    <S.Container>
      <Header />
      <S.Body>
        {params === "/cars" && <Filter />}
        {children}
      </S.Body>
      <Footer />
    </S.Container>
  );
};

export default LayoutCars;
