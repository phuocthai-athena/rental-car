import styled from "styled-components";
import tw from "twin.macro";
import { limitText } from "utils/commons";

export const CarInforContainer = styled.div`
  box-shadow: 0 1.3px 8px -2px rgba(0, 0, 0, 0.4);
  ${tw`w-[492px] h-[508px] bg-white rounded-[10px] p-6 pb-8`}
`;

export const CarInforHeader = styled.div`
  ${tw`flex flex-wrap items-start justify-between`}
`;

export const CarInforTitle = styled.div`
  ${tw`text-secondaryDefault font-bold text-[32px] leading-[48px] tracking-[-0.03em]`}
`;

export const CarInforReview = styled.div`
  ${tw`flex flex-wrap items-center justify-start mt-[10px] gap-x-2 h-[20px]`}
`;

export const CarInforTextReview = styled.span`
  ${tw`text-secondarylight4 font-medium text-sm leading-[18px] tracking-[0.02em] select-none`}
`;

export const CarInforDesc = styled.div`
  ${tw`font-normal text-xl leading-[40px] tracking-[-0.02em] text-secondarylight4 mt-[34px]`}
  ${limitText}
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CarInforDataWrapper = styled.div`
  ${tw`w-full flex flex-wrap gap-x-[44px] mt-[32px]`}
`;

export const CarInforData = styled.div`
  ${tw`w-[calc(50%-22px)] flex justify-between`}
`;

export const CarInforKey = styled.span`
  ${tw`text-secondarylight3 text-xl leading-[30px] tracking-[-0.02em]`}
`;

export const CarInforValue = styled.span`
  ${tw`text-secondarylight4 font-semibold text-xl leading-[30px] tracking-[-0.02em]`}
`;

export const CarInforBottom = styled.div`
  ${tw`flex flex-wrap justify-between mt-[68px]`}
`;

export const CarInforPriceWrapper = styled.div`
  ${tw`flex flex-col gap-y-1 select-none`}
`;

export const CarInforPrice = styled.div`
  ${tw`text-secondaryDefault text-[28px] leading-[35px] font-bold`}
`;

export const CarInforDay = styled.span`
  ${tw`text-base leading-[20px] text-secondarylight3`}
`;

export const CarInforInitialPrice = styled.div`
  ${tw`font-bold text-base leading-[20px] line-through text-secondarylight3`}
`;
