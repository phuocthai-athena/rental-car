import styled from "styled-components";
import tw from "twin.macro";

export const AboutUsContainer = styled.div`
  ${tw`flex flex-wrap items-center justify-center w-full gap-8 pt-4 pb-4 pr-7 pl-7`}
`;

export const CarContainer = styled.div`
  ${tw`w-auto h-[15em] ml-[-30px]`}
  img {
    width: auto;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  ${tw`flex flex-col w-1/2`}
`;

export const Title = styled.h1`
  ${tw`text-2xl font-extrabold text-secondaryDefault`}
`;

export const InfoText = styled.p`
  ${tw`max-w-xl mt-4 text-sm font-normal text-justify text-secondarylight4`}
`;
