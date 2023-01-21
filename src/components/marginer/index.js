import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const Marginer = (props) => {
  const { direction } = props;

  if (direction === "horizontal") {
    return <S.HorizontalMargin {...props} />;
  } else {
    return <S.VerticalMargin {...props} />;
  }
};

Marginer.propTypes = {
  direction: PropTypes.string,
};

export default Marginer;
