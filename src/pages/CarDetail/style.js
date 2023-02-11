import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`relative flex flex-col pt-10 mx-auto gap-y-10`}
`;

export const InforWrapper = styled.div`
  ${tw`flex flex-wrap w-full gap-x-10`}
`;

export const ReviewWrapper = styled.div`
  ${tw`w-[1024px]`}
`;

export const RecommendWrapper = styled.div`
  ${tw`w-[1024px] mb-8`}
`;

export const BackButton = styled.div`
  ${tw`absolute left-[-220px] text-sm text-secondarylight3 hover:text-secondarylight4 cursor-pointer`}
  .back-button {
    display: flex;
    align-items: center;
  }

  svg {
    height: 16px;
    width: 16px;
    path {
      fill: rgb(144 163 191);
    }
  }

  &:hover {
    svg {
      path {
        fill: rgb(89 103 128);
      }
    }
  }
`;
