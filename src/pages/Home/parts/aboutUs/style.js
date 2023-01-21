import styled from "styled-components";
import tw from "twin.macro";

export const AboutUsContainer = styled.div`
  ${tw`flex flex-col w-full pl-[64px] pr-[64px]`}
`;

export const TopAbouUs = styled.div`
  ${tw`flex mb-5`}
`;

export const TopTitle = styled.h2`
  ${tw`text-base leading-[20px] pl-5 font-semibold text-secondarylight3`}
`;

export const AboutUsContent = styled.div`
  ${tw`flex flex-wrap items-center justify-center gap-8 pt-4 pb-4 pl-7 pr-7`}
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
