import React from "react";
import { Link } from "react-router-dom";
import Car from "components/car";
import Button from "components/button";

import * as S from "./style";

const PopularCars = () => {
  const testCar = {
    carName: "Koenigsegg",
    carType: "Sport",
    thumnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    gas: "90L",
    gearType: "Auto",
    dailyPrice: 70,
    salePrice: null,
    discount: null,
    people: 4,
    isSale: false,
  };

  const testCar2 = {
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
  };

  const cars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
  ];

  return (
    <S.PopularCarsContainer>
      <S.TopPopular>
        <S.Title>Popular Car</S.Title>
        <S.ButtonViewAll>View All</S.ButtonViewAll>
      </S.TopPopular>
      <S.CarsContainer>
        {cars.map((item) => {
          return item;
        })}
      </S.CarsContainer>
      <Link to="/cars">
        <Button themes="outlined" className="popular--show-more">
          Show more car
        </Button>
      </Link>
    </S.PopularCarsContainer>
  );
};

export default PopularCars;
