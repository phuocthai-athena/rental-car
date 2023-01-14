import styled from "styled-components";
import tw from "twin.macro";

export const CardContainer = styled.div`
  padding: 26px 48px;
  ${tw`
    bg-white
    rounded-[10px]
    w-[582px]
    h-[136px]
  `}
`;

export const CardHeader = styled.div`
  ${tw`
    flex
    items-center
    gap-[8px]
  `}
`;

export const CardIcon = styled.span``;

export const CardTitle = styled.span`
  ${tw`font-semibold text-secondaryDefault`}
`;

export const CardOptions = styled.div`
  ${tw`flex justify-between`}
`;
