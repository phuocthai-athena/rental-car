import React, { useState } from "react";
import PropTypes from "prop-types";
import useClickOutSide from "hooks/useClickOutSide";
import DropdownList from "./dropdownList";
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "assets/icons/arrow-up.svg";

import * as S from "./style";

const Dropdown = (props) => {
  const { children, label, title } = props;

  const { nodeRef, show, setShow } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = () => {
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };

  return (
    <S.DropdownContainer ref={nodeRef}>
      <S.DropdownTitle>{label}</S.DropdownTitle>
      <S.DropdownSelect onClick={handleClick}>
        <S.DropdownSelecteName>{title}</S.DropdownSelecteName>
        <S.DropdownIcon>{show ? <ArrowUp /> : <ArrowDown />}</S.DropdownIcon>
      </S.DropdownSelect>
      {show && <DropdownList coords={coords}>{children}</DropdownList>}
    </S.DropdownContainer>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  title: PropTypes.string,
};

export default Dropdown;
