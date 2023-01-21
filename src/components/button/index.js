import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "components/loading/loadingSpinner";

import * as S from "./style";

const Button = (props) => {
  const {
    type = "button",
    children,
    styles = "primary",
    themes = "filled",
    isLoading = false,
    className,
    ...rest
  } = props;

  const child = !!isLoading ? <LoadingSpinner /> : children;

  return (
    <S.Button
      className={className}
      type={type}
      {...rest}
      styles={styles}
      themes={themes}
    >
      {child}
    </S.Button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  styles: PropTypes.string,
  themes: PropTypes.string,
  children: PropTypes.node || PropTypes.string,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
