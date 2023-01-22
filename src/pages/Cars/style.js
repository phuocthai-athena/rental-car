import styled from "styled-components";
import tw from "twin.macro";

export const CarPageContainer = styled.div`
  ${tw`h-full pt-10 pb-10 mx-auto`}

  .infinite-scroll-component__outerdiv {
    .infinite-scroll-component {
      overflow-y: hidden !important;
    }
  }
`;

export const Content = styled.div`
  ${tw`w-[1040px] flex flex-wrap justify-start gap-8 pl-8 pr-8 pt-4 pb-4`}
`;

export const NumberOfList = styled.div`
  ${tw`pt-4 pb-4 ml-auto text-2xl font-semibold tracking-[0.02em] bg-transparent text-secondaryDefault`}
`;

export const NumberTitle = styled.span`
  ${tw`text-sm text-secondarylight4`}
`;

export const ButtonShowMore = styled.div`
  ${tw`flex justify-center mt-[64px]`}
`;

export const LoadingContainer = styled.div`
  ${tw`flex justify-center`}
`;

export const ScrollTopContainer = styled.span`
  ${tw`w-[44px] h-[44px] p-[10px] bg-primaryDefault block rounded-[10px] text-white`}
`;
