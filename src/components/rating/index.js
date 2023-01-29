import React from "react";
import Rating from "react-rating";
import PropTypes from "prop-types";
import { ReactComponent as StarFull } from "assets/icons/star-full.svg";
import { ReactComponent as StarEmpty } from "assets/icons/star-empty.svg";

const RatingButton = (props) => {
  const { readonly, initialRating } = props;

  return readonly ? (
    <Rating
      emptySymbol={<StarEmpty />}
      fullSymbol={<StarFull />}
      readonly
      initialRating={initialRating}
    />
  ) : (
    <Rating emptySymbol={<StarEmpty />} fullSymbol={<StarFull />} />
  );
};

RatingButton.propTypes = {
  readonly: PropTypes.bool,
  initialRating: PropTypes.number,
};

export default RatingButton;
