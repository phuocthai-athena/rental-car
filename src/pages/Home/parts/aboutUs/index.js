import React from "react";

import JeepImg from "assets/images/jeep.png";
import * as S from "./style";

const AboutUs = () => {
  return (
    <S.AboutUsContainer>
      <S.TopAbouUs>
        <S.TopTitle>About Us</S.TopTitle>
      </S.TopAbouUs>
      <S.AboutUsContent>
        <S.CarContainer>
          <img src={JeepImg} alt="Jeep Car" />
        </S.CarContainer>
        <S.InfoContainer>
          <S.Title>Fell The Best Experience With Our Rental Deals</S.Title>
          <S.InfoText>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </S.InfoText>
        </S.InfoContainer>
      </S.AboutUsContent>
    </S.AboutUsContainer>
  );
};

export default AboutUs;
