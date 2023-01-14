import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw`
    flex items-center justify-center pl-[16px] pr-[16px] pt-[9px] pb-[9px] bg-primaryDefault text-white rounded-[4px] font-semibold min-w-[150px] cursor-pointer hover:bg-white hover:text-primaryDefault border border-solid border-primaryDefault capitalize
  `}

  ${(props) =>
    props.themes === "outlined" &&
    css`
      ${tw`bg-white hover:bg-primaryDefault text-primaryDefault hover:text-white`}
    `}

  ${(props) =>
    props.styles === "secondary" &&
    css`
      ${tw`bg-white border border-solid border-secondarylight4 text-secondaryDefault hover:bg-primaryLight1`}
    `}

  ${(props) =>
    props.disabled &&
    css`
      ${tw`opacity-[0.4] disabled:hover:bg-primaryDefault  disabled:hover:text-white`}
    `}
`;
