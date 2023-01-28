import React from "react";
import Header from "layout/header";

import * as S from "./style";
import Footer from "layout/footer";
import Filter from "layout/filter";

const LayoutCars = (props) => {
  const { children } = props;

  return (
    <S.Container>
      <Header />
      <S.Body>
        <Filter />
        <div className="w-[288px]"></div>
        {children}
      </S.Body>
      <Footer />
    </S.Container>
  );
};

export default LayoutCars;
