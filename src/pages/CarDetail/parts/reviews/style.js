import styled from "styled-components";
import tw from "twin.macro";

export const ReviewContainer = styled.div`
  box-shadow: 0 1.3px 8px -2px rgba(0, 0, 0, 0.4);
  ${tw`bg-white rounded-[10px] mb-[42px] p-6 flex flex-col gap-y-8`}
`;

export const ReviewHeaderContainer = styled.div`
  ${tw`flex gap-x-3 h-[28px] items-center`}
`;

export const ReviewHeader = styled.div`
  ${tw`font-semibold text-xl leading-[25px] tracking-[-0.02em] text-secondaryDefault`}
`;

export const ReviewTotal = styled.div`
  ${tw`w-[44px] h-full rounded bg-primaryDefault flex justify-center items-center`}
`;

export const Number = styled.span`
  ${tw`font-bold text-sm leading-[18px] text-white `}
`;

export const ReviewBody = styled.div`
  ${tw`flex flex-col w-full overflow-y-hidden gap-y-6`}
`;

export const ButtonWrapper = styled.div`
  ${tw`h-[44px] flex items-center justify-center py-[10px]`}
`;

export const ButtonContainer = styled.div`
  ${tw`flex items-center justify-center cursor-pointer select-none gap-x-2`}
`;

export const ButtonText = styled.span`
  ${tw`font-semibold text-base leading-[24px] tracking-[-0.02em] text-secondarylight3`}
`;

export const ButtonIcon = styled.span`
  svg {
    path {
      stroke: #90a3bf;
    }
  }
`;
