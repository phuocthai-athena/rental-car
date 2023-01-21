import React, { useState } from "react";
import { ReactComponent as HeartOn } from "assets/icons/heart-on.svg";
import { ReactComponent as HeartOff } from "assets/icons/heart-off.svg";

import * as S from "./style";

const LikeToogle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleLike = () => {
    setIsOn(!isOn);
  };

  return (
    <S.LikeToogle onClick={handleLike}>
      {isOn ? <HeartOn /> : <HeartOff />}
    </S.LikeToogle>
  );
};

export default LikeToogle;
