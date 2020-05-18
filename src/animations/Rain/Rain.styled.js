import styled, { keyframes } from "styled-components";

const raining =  keyframes`
  to {
    transform: translateY(150vh);
  }
`;

export const RainWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: transparent;
`;

export const Raindrop = styled.i`
  background: white;
  will-change: transform;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
  height: 50px;
  left: ${({left}) => left}%;
  top: -50px;
  position: absolute;
  width: 1px;
  animation: ${raining} ${({ duration }) => duration}s linear ${({ delay }) => delay}s infinite;
`;
