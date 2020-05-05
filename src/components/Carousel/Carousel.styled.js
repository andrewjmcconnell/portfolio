import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SlideContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 90vw;
  height: 60vh;
  margin: 0 auto;
  overflow: hidden;

  // ${({ theme }) => theme.isMobile && `overflow-x: visible;`}
`;

export const SlideWrapper = styled.div`
  display: flex;
  width: calc(90vw * ${({ pages }) => pages.length});
  height: 100%;
  transform: translateX(calc((${({ theme }) => theme.isMobile ? "-90vw" : "-85vw"} - ${({ spacing }) => spacing}) * ${({ index }) => index}));
  transition: transform 1s;
`;

export const PaginationWrapper = styled.div`
  margin: 2vh auto;
`;