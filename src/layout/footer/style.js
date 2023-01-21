import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
  ${tw`min-w-full bg-white pt-[80px] pl-[64px] pr-[64px] pb-[60px] flex flex-col`}
`;

export const InnerContainer = styled.div`
  ${tw`flex justify-between w-full h-full`}
`;

export const AboutContainer = styled.div`
  ${tw`flex flex-col mr-7`}
`;

export const AboutText = styled.p`
  ${tw`text-2xl text-primaryDefault`}
`;

export const AboutDesc = styled.p`
  ${tw`max-w-[292px] mt-2 text-sm font-normal leading-5 text-secondaryDefault`}
`;

export const SectionContainer = styled.div`
  ${tw`flex gap-[60px]`}
`;

export const SectionItem = styled.div`
  ${tw`flex flex-col justify-center w-[152px]`}
`;

export const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none`}
`;

export const ListItem = styled.li`
  ${tw`mb-3`}

  & > a {
    ${tw`text-base leading-6 font-medium text-[#13131399] tracking-[-0.02em] hover:underline`}
  }
`;

export const HeaderTitle = styled.h3`
  ${tw`mb-6 text-[20px] font-semibold tracking-[-0.02em] leading-[30px] text-secondaryDefault`}
`;

export const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`flex mt-9 mb-9 bg-[#13131329]`}
`;

export const CopyRight = styled.p`
  ${tw`text-secondaryDefault text-base leading-[24px] tracking-[-0.02em]`}
`;
