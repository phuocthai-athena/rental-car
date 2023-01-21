import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex flex-col items-center w-full pt-3 pb-3`}
`;

export const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-secondaryDefault`}
`;

export const StepsContainer = styled.div`
  ${tw`flex flex-wrap justify-evenly mt-7`}
`;

export const StepContainer = styled.div`
  ${tw`flex flex-col items-center m-3 transition-colors hover:text-errorDark6`}
`;

export const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center p-6 rounded-[10px] w-[84px]`}
`;

export const StepTitle = styled.h4`
  ${tw`mt-4 text-lg font-semibold text-secondaryDefault`}
`;

export const StepDescription = styled.p`
  ${tw`w-10/12 text-xs text-center text-secondarylight4`}
`;

export const StepIcon = styled.span`
  ${tw`text-3xl text-primaryLight4`}
`;
