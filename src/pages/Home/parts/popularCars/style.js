import styled from "styled-components";
import tw from "twin.macro";

export const PopularCarsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full pl-4 pr-4 mb-10`}
`;

export const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-secondaryDefault`}
`;

export const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full gap-8 mt-7`}
`;
