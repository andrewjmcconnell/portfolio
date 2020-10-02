import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SlideContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 95vw;
  height: 65vh;
  margin: 0 auto;
  overflow: hidden;
  z-index: 2;
  ${({ theme }) => theme.isMobile && `overflow-x: scroll;`}
`;

export const SlideWrapper = styled.div`
  display: flex;
  width: calc(90vw * ${({ pages }) => pages.length});
  height: 100%;
  transform: translateX(calc((-90vw - ${({ spacing }) => spacing}) * ${({ index }) => index} - 2.5vw));
  transition: transform 1s;
`;

export const PaginationWrapper = styled.div`
  margin: 2vh auto;
  z-index: 2;
`;