import Car from "components/car";
import React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

const recomendCarList = [
  {
    id: "123",
    carName: "Koenigsegg",
    carType: "Sedan",
    thumnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    gas: "90L",
    gearType: "Auto",
    dailyPrice: 70,
    salePrice: 56,
    discount: 20,
    people: 4,
    isSale: true,
  },
  {
    id: "123",
    carName: "Koenigsegg",
    carType: "Sedan",
    thumnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    gas: "90L",
    gearType: "Auto",
    dailyPrice: 70,
    salePrice: 56,
    discount: 20,
    people: 4,
    isSale: true,
  },
  {
    id: "123",
    carName: "Koenigsegg",
    carType: "Sedan",
    thumnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    gas: "90L",
    gearType: "Auto",
    dailyPrice: 70,
    salePrice: 56,
    discount: 20,
    people: 4,
    isSale: true,
  },
];

const RecommendCar = () => {
  return (
    <S.RecommendContainer>
      <S.RecommendHeader>
        <S.RecommendTitle>Recomendation Car</S.RecommendTitle>
        <Link to="/cars">
          <S.RecommendViewAll>View All</S.RecommendViewAll>
        </Link>
      </S.RecommendHeader>
      <S.RecommendBody>
        {recomendCarList.map((item, index) => {
          return <Car key={index} {...item} />;
        })}
      </S.RecommendBody>
    </S.RecommendContainer>
  );
};

export default RecommendCar;
