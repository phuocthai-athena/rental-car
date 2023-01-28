import React, { useState } from "react";
import CheckboxList from "components/checkboxList";
import FilterRange from "components/filterRange";

import * as S from "./style";

const filterTypes = [
  {
    id: "1",
    label: "Sport",
    number: "10",
    value: "sport",
  },
  {
    id: "2",
    label: "SUV",
    number: "12",
    value: "suv",
  },
  {
    id: "3",
    label: "MPV",
    number: "16",
    value: "mpv",
  },
  {
    id: "4",
    label: "Sedan",
    number: "20",
    value: "sedan",
  },
  {
    id: "5",
    label: "Coupe",
    number: "14",
    value: "coupe",
  },
  {
    id: "6",
    label: "Hatchback",
    number: "14",
    value: "hatchback",
  },
];

const filterSeat = [
  {
    id: "a",
    label: "2 Person",
    number: "10",
    value: "2",
  },
  {
    id: "b",
    label: "4 Person",
    number: "14",
    value: "4",
  },
  {
    id: "c",
    label: "5 Person",
    number: "12",
    value: "5",
  },
  {
    id: "d",
    label: "7 Person",
    number: "16",
    value: "7",
  },
];

const filterPrices = {
  min: 0,
  max: 200,
  value: 50,
};

const Filter = () => {
  const [checked, setChecked] = useState([]);
  const [filterPrice, setFilterPrice] = useState(filterPrices.value);

  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handleFilterPrice = (e) => {
    let result = e.target.value;
    setFilterPrice(result);
  };

  return (
    <S.FilterContainer>
      <S.FilterWrapper>
        <S.FilterTitle>Type</S.FilterTitle>
        <S.FilterCheckbox>
          {filterTypes.map((item) => (
            <CheckboxList
              key={item.id}
              id={item.id}
              value={item.value}
              type="checkbox"
              onChange={handleCheck}
              label={item.label}
              number={item.number}
            />
          ))}
        </S.FilterCheckbox>
      </S.FilterWrapper>
      <S.FilterWrapper>
        <S.FilterTitle>Seat</S.FilterTitle>
        <S.FilterCheckbox>
          {filterSeat.map((item) => (
            <CheckboxList
              key={item.id}
              id={item.id}
              value={item.value}
              type="checkbox"
              onChange={handleCheck}
              label={item.label}
              number={item.number}
            />
          ))}
        </S.FilterCheckbox>
      </S.FilterWrapper>
      <S.FilterWrapper>
        <S.FilterTitle>Price</S.FilterTitle>
        <FilterRange
          name="price"
          min={filterPrices.min}
          max={filterPrices.max}
          value={filterPrice}
          label={`Max. $${Number(filterPrice).toFixed(2)}`}
          onChange={handleFilterPrice}
        />
      </S.FilterWrapper>
    </S.FilterContainer>
  );
};

export default Filter;
