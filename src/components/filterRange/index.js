import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const FilterRange = (props) => {
  const { name, min, max, value, onChange, label } = props;

  return (
    <>
      <S.InputRange
        type="range"
        min={min}
        max={max}
        value={value}
        step={10}
        onChange={onChange}
      />
      <S.LabelRange htmlFor={name}>{label}</S.LabelRange>
    </>
  );
};

FilterRange.propTypes = {
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  label: PropTypes.string,
};

export default FilterRange;
