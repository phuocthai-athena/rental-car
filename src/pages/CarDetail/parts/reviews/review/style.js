import styled from "styled-components";
import tw from "twin.macro";

export const ReviewWrapper = styled.div`
  ${tw`h-[124px] flex flex-col gap-y-3`}
`;

export const ReviewHeader = styled.div`
  ${tw`w-full h-[56px] flex justify-between`}
`;

export const ReviewerInfor = styled.div`
  ${tw`h-full flex gap-x-[16px]`}
`;

export const ReviewerAvatar = styled.div`
  ${tw`w-[56px] h-full`}
  img {
    height: 100%;
    width: 100%;
    border-radius: 60px;
  }
`;

export const ReviewerDetail = styled.div`
  ${tw`h-full flex flex-col gap-y-2`}
`;

export const ReviewerName = styled.span`
  ${tw`font-bold text-xl leading-[25px] tracking-[-0.03em] text-secondaryDefault`}
`;

export const ReviewerJob = styled.span`
  ${tw`font-medium text-sm leading-[21px] tracking-[-0.02em] text-secondarylight3`}
`;

export const ReviewInfor = styled.div`
  ${tw`h-full flex flex-col items-end gap-y-2`}
`;

export const ReviewDay = styled.span`
  ${tw`font-medium text-sm leading-[21px] tracking-[-0.02em] text-secondarylight3`}
`;

export const ReviewRating = styled.div`
  ${tw``}
`;

export const ReviewComment = styled.div`
  ${tw`pl-[72px] font-normal text-sm leading-[28px] tracking-[-0.02em] text-secondarylight4`}
`;
