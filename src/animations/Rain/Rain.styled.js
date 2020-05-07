import styled, { keyframes } from "styled-components";

const raining = ({left}) => keyframes`
  0% {
    left: ${left}%;
    top: calc(0% - 50px)
  }
  100% {
    left: ${left}%;
    top: 150%;
  }
`;

export const RainWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const Raindrop = styled.i`
  background: white;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
  height: 50px;
  position: absolute;
  width: 1px;
  animation: ${raining} ${({ duration }) => duration}s ease ${({ delay }) => delay}s infinite;
`;
