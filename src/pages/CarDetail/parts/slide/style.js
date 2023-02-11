import styled from "styled-components";
import tw from "twin.macro";

export const CarSlideContainer = styled.div`
  background-color: transparent;
  ${tw`w-[492px] h-[508px]`};
`;

export const CarSlideCarousel = styled.div`
  ${tw`w-full h-full`}

  .car-detail-carousel-1 {
    height: 360px;
    width: 100%;
    .swiper-wrapper {
      .swiper-slide {
        img {
          height: 360px;
          width: 100%;
          border-radius: 10px;
          user-select: none;
        }
      }
    }
  }

  .car-detail-carousel-2 {
    margin-top: 24px;
    .swiper-wrapper {
      .swiper-slide {
        width: 148px;
        height: 124px;
        border-radius: 10px;
        &.swiper-slide-thumb-active {
          border: 2px solid #3563e9;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 132px;
            height: 108px;
            user-select: none;
          }
        }
        img {
          height: 100%;
          width: 100%;
          border-radius: 8px;
          user-select: none;
        }
      }
    }
  }
`;
