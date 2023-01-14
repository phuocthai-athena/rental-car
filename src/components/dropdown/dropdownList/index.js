import React from "react";
import ReactDOM from "react-dom";

import * as S from "./style";

const DropdownList = (props) => {
  const { coords, children } = props;

  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <S.DropdownListContainer
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY + 4,
        width: coords.width,
      }}
    >
      {children}
    </S.DropdownListContainer>,
    document.querySelector("body")
  );
};

export default DropdownList;
