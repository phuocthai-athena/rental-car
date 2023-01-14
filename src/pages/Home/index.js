import React from "react";
import LayoutHome from "layout/layoutHome";
import Banner from "./parts/banner/index.js";
import BookCard from "./parts/bookCard/index.js";

import * as S from "./style";

const Home = () => {
  return (
    <>
      <LayoutHome>
        <S.HomeContainer>
          <Banner />
          <BookCard />
        </S.HomeContainer>
      </LayoutHome>
    </>
  );
};

export default Home;
