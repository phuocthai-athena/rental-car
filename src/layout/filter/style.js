import styled from "styled-components";
import tw from "twin.macro";

export const FilterContainer = styled.div`
  ${tw`min-w-[288px] h-fit bg-white border border-[#f3f5f7] rounded-br-[10px] fixed`}
`;

export const FilterWrapper = styled.div`
  ${tw`flex flex-col pt-5 pb-4 pl-8 pr-8`}
`;

export const FilterTitle = styled.div`
  ${tw`font-semibold text-sm tracking-[0.1em] text-secondarylight3 uppercase mb-3`}
`;

export const FilterCheckbox = styled.div`
  ${tw`flex flex-col gap-y-3`}
`;
