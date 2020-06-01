import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  to { transform: translateY(2vh); }
`;

const swim = ({ left, width }) => keyframes`
  0% {
   transform: translateX(0)
  }
  100% {
    ${left ? `transform: translateX(calc(100vw + ${width}vw))` : `transform: translateX(calc(-100vw - ${width}vw))`};
  }
`;

export const Ocean = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const OuterFishWrapper = styled.div`
  will-change: transform;
  animation: ${bounce} 1.5s alternate ${({ delay }) => delay}s infinite ease-in-out;
`;

export const FishWrapper = styled.div.attrs(({ top, width }) => ({
  style: {
    top: `${top}vw`,
    width: `-${width}vmax`
  }
}))`
  position: absolute;
  will-change: transform;
  ${({ left, width }) => left ? `left: -${width}vw` : `right: -${width}vw`};
  animation: ${swim} ${({ duration }) => duration}s linear ${({ delay }) => delay}s infinite;
`;
