import React from "react";
import MclarenCarImg from "assets/images/mclaren-orange-big.png";
import BlobImg from "assets/images/blob.svg";

import * as S from "./style";
import Button from "components/button";

const Banner = () => {
  return (
    <S.BannerContainer>
      <S.LeftContainer>
        <S.Slogan>rent the best quality car's with us</S.Slogan>
        <S.Description>
          Always choose the best car from car our local stores or order is
          remotely at the best price for you and get the best quality cars for
          as long as you like
        </S.Description>
        <S.ButtonContainer>
          <Button type="button">book your ride</Button>
        </S.ButtonContainer>
      </S.LeftContainer>
      <S.RightContainer>
        <S.BlobContainer>
          <img src={BlobImg} alt="Blob" />
        </S.BlobContainer>
        <S.StandaloneCar>
          <img src={MclarenCarImg} alt="Mclaren" />
        </S.StandaloneCar>
      </S.RightContainer>
    </S.BannerContainer>
  );
};

export default Banner;
