import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const ButtonIcon = (props) => {
  const { type = "button", children, className, ...rest } = props;

  return (
    <S.ButtonIconContainer type={type} className={className} {...rest}>
      {children}
    </S.ButtonIconContainer>
  );
};

ButtonIcon.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ButtonIcon;
