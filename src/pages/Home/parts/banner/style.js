import styled from "styled-components";
import tw from "twin.macro";

export const BannerContainer = styled.div`
  ${tw`
    min-h-[250px]
    w-full
    flex
    justify-between
    pl-[60px]
    pr-[60px]
  `}
`;

export const LeftContainer = styled.div`
  ${tw`flex flex-col w-1/2 `}
`;

export const RightContainer = styled.div`
  ${tw`relative flex flex-col w-1/2 mt-20 `}
`;

export const Slogan = styled.h1`
  ${tw`mb-4 text-6xl font-bold capitalize text-secondaryDefault`}
`;

export const Description = styled.p`
  ${tw`mb-6 overflow-hidden text-xl font-medium text-secondarylight4`}
`;

export const BlobContainer = styled.div`
  width: 35em;
  height: 10em;
  position: absolute;
  right: 9em;
  top: -12em;
  z-index: 1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
`;

export const StandaloneCar = styled.div`
  width: auto;
  height: 17em;
  right: 6em;
  top: -5em;
  position: absolute;
  z-index: 2;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
`;

export const ButtonContainer = styled.div`
  ${tw`flex`}
`;
