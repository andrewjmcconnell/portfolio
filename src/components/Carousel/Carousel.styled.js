import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  display: flex;
  width: 70vw;
  height: 60vh;
`;

export const SlideWrapper = styled.div`
  display: flex;
  width: calc(100% * ${({ pages }) => pages.length});
  height: 100%;
  transform: translateX(calc(-100% * ${({ index }) => index}));
  transition: transform 1s;
`;

export const Slide = styled.div`
  flex: none;
  width: 90%;
  height: 100%;
  margin: 0 5%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PaginationWrapper = styled.div`
  margin: 2vh auto;
`;