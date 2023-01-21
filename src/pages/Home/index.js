import React from "react";
import LayoutHome from "layout/layoutHome";
import Banner from "./parts/banner/index.js";
import BookCard from "./parts/bookCard/index.js";
import Marginer from "components/marginer/index.js";

import * as S from "./style";
import BookingSteps from "./parts/bookingSteps/index.js";
import AboutUs from "./parts/aboutUs/index.js";
import PopularCars from "./parts/popularCars/index.js";

const Home = () => {
  return (
    <>
      <LayoutHome>
        <S.HomeContainer>
          <Banner />
          <Marginer direction="vertical" margin="4em" />
          <BookCard />
          <Marginer direction="vertical" margin="8em" />
          <BookingSteps title="Our Working Steps" />
          <Marginer direction="vertical" margin="6em" />
          <AboutUs />
          <Marginer direction="vertical" margin="8em" />
          <PopularCars />
        </S.HomeContainer>
      </LayoutHome>
    </>
  );
};

export default Home;
