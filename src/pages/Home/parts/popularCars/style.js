import styled from "styled-components";
import tw from "twin.macro";

export const PopularCarsContainer = styled.div`
  ${tw`flex flex-col justify-center w-full pl-[64px] pr-[64px] mb-10`}

  .popular--show-more {
    max-width: 156px;
    max-height: 44px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    font-weight: 600;
    margin: auto;
    margin-top: 12px;
  }
`;
export const TopPopular = styled.div`
  ${tw`flex justify-between`}
`;

export const Title = styled.h2`
  ${tw`text-base leading-[20px] pl-5 font-semibold text-secondarylight3`}
`;

export const ButtonViewAll = styled.span`
  ${tw`text-primaryDefault font-semibold text-base leading-[20px] cursor-pointer hover:underline`}
`;

export const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-between w-full mt-[30px] mb-[42px] h-[430px]`}
  .mySwiper {
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
