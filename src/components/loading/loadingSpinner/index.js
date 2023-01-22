import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const LoadingSpinner = (props) => {
  const { color, size } = props;

  return <S.Loading color={color} size={size}></S.Loading>;
};

LoadingSpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default LoadingSpinner;
