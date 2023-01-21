import styled from "styled-components";
import tw from "twin.macro";

export const CarContainer = styled.div`
  box-shadow: 0 1.3px 8px -2px rgba(0, 0, 0, 0.4);
  ${tw`w-[304px] flex flex-col p-6 pb-4 bg-[#ffffff] rounded-[10px]`}
`;

export const TopContainer = styled.div`
  ${tw`flex justify-between mb-2`}
`;

export const CarNameContainer = styled.div`
  ${tw`flex flex-col justify-center`}
`;

export const CarName = styled.h2`
  ${tw`text-secondaryDefault tracking-[-0.03em] font-bold text-xl mb-1`}
`;

export const CarType = styled.p`
  ${tw`text-sm font-bold text-secondarylight3`}
`;

export const CarThumbnail = styled.div`
  width: 256px;
  height: 200px;
  margin-bottom: 8px;
  user-select: none;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SaleTag = styled.div`
  ${tw`absolute top-[-11px] right-0 z-[2]`}
`;

export const SalePercent = styled.span`
  ${tw`bg-[rgba(255, 53, 1, 0.8)] pt-[3px] pb-[3px] pl-[10px] pr-[10px] text-white text-[0.875em] rounded-[20px]`}
`;

export const CarDetailsContainer = styled.div`
  ${tw`flex items-center justify-between w-full`}
`;

export const CarDetail = styled.span`
  ${tw`flex items-center justify-center gap-2`}
`;

export const SmallIcon = styled.span`
  ${tw`text-sm text-secondarylight3`}
`;

export const CarInfor = styled.h6`
  ${tw`text-sm leading-[21px] tracking-[-0.02em] text-secondarylight3 select-none`}
`;

export const BottomContainer = styled.div`
  ${tw`flex justify-between`}
  .car--rent-now {
    min-width: 116px;
    min-height: 44px;
  }
`;

export const PricesContainer = styled.div`
  ${tw`flex flex-col`}
`;

export const DailyPrice = styled.div`
  ${tw`text-secondaryDefault font-bold text-xl leading-[25px]`}
`;

export const InitialPrice = styled.div`
  ${tw`text-secondarylight3 text-sm leading-[18px] font-bold line-through`}
`;

export const SmallText = styled.p`
  color: inherit;
  ${tw`text-sm font-bold leading-[18px] inline-block text-secondarylight3`}
`;

export const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`flex mt-3 mb-3 bg-secondarylight3`}
`;
