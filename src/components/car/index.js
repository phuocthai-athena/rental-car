import React from "react";
import PropTypes from "prop-types";
import LikeToogle from "components/likeToogle";
import Button from "components/button";
import { ReactComponent as GasStationIcon } from "assets/icons/gas-station-bold.svg";
import { ReactComponent as CarMachineIcon } from "assets/icons/machine-car.svg";
import { ReactComponent as PeopleIcon } from "assets/icons/people.svg";

import * as S from "./style";

const Car = (props) => {
  const {
    carName,
    carType,
    thumnailSrc,
    gas,
    gearType,
    dailyPrice,
    salePrice,
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
        <img src={thumnailSrc} alt={carName} />
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
          {true && <S.InitialPrice>${dailyPrice.toFixed(2)}</S.InitialPrice>}
        </S.PricesContainer>
        <Button className="car--rent-now">Rent Now</Button>
      </S.BottomContainer>
    </S.CarContainer>
  );
};

Car.propTypes = {
  carName: PropTypes.string,
  carType: PropTypes.string,
  thumnailSrc: PropTypes.string,
  gas: PropTypes.string,
  gearType: PropTypes.string,
  dailyPrice: PropTypes.number,
  salePrice: PropTypes.number,
  people: PropTypes.number,
  isSale: PropTypes.bool,
};

export default Car;
