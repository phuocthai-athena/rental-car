import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`
    fixed
    top-0
    left-0
    right-0
    z-[999]
    w-full
    h-[80px]
    flex
    items-center
    justify-between
    pl-[60px]
    pr-[60px]
    border-b
    border-solid
    border-[rgba(195, 212, 233, 0.4)]
    bg-white
  `}
`;

export const HeaderTitle = styled.h2`
  ${tw`
    text-primaryDefault
    uppercase
    text-[32px]
    leading-[48px]
    font-bold
  `}
`;

export const HeaderItems = styled.ul`
  ${tw`flex items-center justify-center gap-5`}
`;

export const HeaderItem = styled.li`
  ${tw`inline-block text-xl font-medium capitalize cursor-pointer text-secondaryDefault hover:text-primaryDefault`}
`;

export const HeaderImage = styled.img`
  ${tw`h-[44px] w-[44px] rounded-[90px]`}
`;
