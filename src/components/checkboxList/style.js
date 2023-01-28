import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex items-center gap-x-3`}
`;

export const InputCheckbox = styled.input`
  ${tw`w-4 h-4 cursor-pointer`}
`;

export const LabelCheckbox = styled.label`
  ${tw`font-medium cursor-pointer select-none text-secondaryDefault tracking-[-0.02em] text-sm`}
`;

export const CheckboxNumber = styled.span`
  ${tw`text-secondarylight3`}
`;
