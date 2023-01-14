import styled from "styled-components";
import tw from "twin.macro";

export const DropdownContainer = styled.div`
  ${tw`relative mt-[16px]`}
`;

export const DropdownTitle = styled.div`
  ${tw`
    font-bold text-secondaryDefault mb-[8px]
  `}
`;

export const DropdownSelect = styled.div`
  ${tw`
    flex items-center text-xs text-secondarylight3 gap-[8px] cursor-pointer select-none
  `}
`;

export const DropdownSelecteName = styled.span`
  ${tw`
    min-w-[104px]
  `}
`;

export const DropdownIcon = styled.span`
  ${tw`fill-current text-secondaryDefault`}
`;
