import styled from "styled-components";
import tw from "twin.macro";

export const RecommendContainer = styled.div`
  ${tw`flex flex-col gap-y-4`}
`;

export const RecommendHeader = styled.div`
  ${tw`flex items-center justify-between h-8`}
`;

export const RecommendTitle = styled.span`
  ${tw`pl-5 flex justify-center items-center font-semibold text-base leading-[24px] tracking-[-0.02em] text-secondarylight3`}
`;

export const RecommendViewAll = styled.span`
  ${tw`pr-8 flex justify-center items-center font-semibold text-base leading-[24px] tracking-[-0.02em] text-primaryDefault hover:underline cursor-pointer`}
`;

export const RecommendBody = styled.div`
  ${tw`flex flex-wrap justify-between`}
`;
