const { default: styled, css } = require("styled-components");
const { default: tw } = require("twin.macro");

export const Loading = styled.div`
  ${tw`w-6 h-6 border-4 border-white border-solid rounded-full border-t-transparent border-b-transparent animate-spin`}

  ${(props) =>
    props.color === "primary" &&
    css`
      ${tw`border-primaryDefault border-t-transparent border-b-transparent`}
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      ${tw`w-10 h-10`}
    `}
`;
