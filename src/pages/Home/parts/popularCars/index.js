import Car from "components/car";
import React from "react";

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
    people: 2,
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
    salePrice: 60,
    people: 2,
    isSale: true,
  };

  return (
    <S.PopularCarsContainer>
      <S.Title>Explore Our Popular Cars</S.Title>
      <S.CarsContainer>
        <Car {...testCar} />
        <Car {...testCar2} />
        <Car {...testCar} />
        <Car {...testCar2} />
      </S.CarsContainer>
    </S.PopularCarsContainer>
  );
};

export default PopularCars;
