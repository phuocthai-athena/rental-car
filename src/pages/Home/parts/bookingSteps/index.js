import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const stepItems = [
  {
    icon: faMapMarkedAlt,
    step_title: "Choose Location",
    step_desc: "Find the nearest car point and book your car.",
  },
  {
    icon: faCalendarAlt,
    step_title: "Pick-Up Date",
    step_desc: "Pick Up the Best Date to rent a car for you.",
  },
  {
    icon: faCarSide,
    step_title: "Book Your Car",
    step_desc: "Book your nice car with ease in one single click.",
  },
];

const BookingSteps = (props) => {
  const { title } = props;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.StepsContainer>
        {stepItems.map((item) => (
          <S.StepContainer key={item.step_title}>
            <S.Step>
              <S.StepIcon>
                <FontAwesomeIcon icon={item.icon} />
              </S.StepIcon>
            </S.Step>
            <S.StepTitle>{item.step_title}</S.StepTitle>
            <S.StepDescription>{item.step_desc}</S.StepDescription>
          </S.StepContainer>
        ))}
      </S.StepsContainer>
    </S.Container>
  );
};

BookingSteps.propTypes = {
  title: PropTypes.string,
};

export default BookingSteps;
