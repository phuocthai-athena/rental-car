import React from "react";
import PropTypes from "prop-types";
import LikeToogle from "components/likeToogle";
import Button from "components/button";
import { ReactComponent as GasStationIcon } from "assets/icons/gas-station-bold.svg";
import { ReactComponent as CarMachineIcon } from "assets/icons/machine-car.svg";
import { ReactComponent as PeopleIcon } from "assets/icons/people.svg";

import * as S from "./style";
import { Link } from "react-router-dom";

const Car = (props) => {
  const {
    id,
    carName,
    carType,
    thumnailSrc,
    gas,
    gearType,
    dailyPrice,
    salePrice,
    discount,
    people,
    isSale,
  } = props;

  return (
    <S.CarContainer>
      <S.TopContainer>
        <S.CarNameContainer>
          <S.CarName>{carName}</S.CarName>
          <S.CarType>{carType}</S.CarType>
        </S.CarNameContainer>
        <LikeToogle />
      </S.TopContainer>
      <S.CarThumbnail>
        <Link to={`/cars/${id}`}>
          <img src={thumnailSrc} alt={carName} />
        </Link>
        {isSale && (
          <S.SaleTag>
            <S.SalePercent>Sale {discount}%</S.SalePercent>
          </S.SaleTag>
        )}
      </S.CarThumbnail>
      <S.CarDetailsContainer>
        <S.CarDetail>
          <S.SmallIcon>
            <GasStationIcon />
          </S.SmallIcon>
          <S.CarInfor>{gas}</S.CarInfor>
        </S.CarDetail>
        <S.CarDetail>
          <S.SmallIcon>
            <CarMachineIcon />
          </S.SmallIcon>
          <S.CarInfor>{gearType}</S.CarInfor>
        </S.CarDetail>
        <S.CarDetail>
          <S.SmallIcon>
            <PeopleIcon />
          </S.SmallIcon>
          <S.CarInfor>{people} People</S.CarInfor>
        </S.CarDetail>
      </S.CarDetailsContainer>
      <S.Seperator />
      <S.BottomContainer>
        <S.PricesContainer>
          <S.DailyPrice>
            ${isSale ? salePrice.toFixed(2) : dailyPrice.toFixed(2)} /{" "}
            <S.SmallText>day</S.SmallText>
          </S.DailyPrice>
          {isSale && <S.InitialPrice>${dailyPrice.toFixed(2)}</S.InitialPrice>}
        </S.PricesContainer>
        <Link to={`/cars/${id}`}>
          <Button type="button" className="car--rent-now">
            Rent Now
          </Button>
        </Link>
      </S.BottomContainer>
    </S.CarContainer>
  );
};

Car.propTypes = {
  id: PropTypes.string,
  carName: PropTypes.string,
  carType: PropTypes.string,
  thumnailSrc: PropTypes.string,
  gas: PropTypes.string,
  gearType: PropTypes.string,
  dailyPrice: PropTypes.number,
  salePrice: PropTypes.number,
  discount: PropTypes.number,
  people: PropTypes.number,
  isSale: PropTypes.bool,
};

export default Car;
