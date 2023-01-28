import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const CheckboxList = (props) => {
  const { value, label, number, onChange, id } = props;

  return (
    <S.Container>
      <S.InputCheckbox
        id={id}
        value={value}
        type="checkbox"
        onChange={onChange}
      />
      <S.LabelCheckbox htmlFor={id}>
        {label} {number && <S.CheckboxNumber>({number})</S.CheckboxNumber>}
      </S.LabelCheckbox>
    </S.Container>
  );
};

CheckboxList.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default CheckboxList;
