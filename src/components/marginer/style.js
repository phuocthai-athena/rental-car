import styled from "styled-components";
import tw from "twin.macro";

export const HorizontalMargin = styled.span`
  ${tw`flex `}
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

export const VerticalMargin = styled.span`
  ${tw`flex`}
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
