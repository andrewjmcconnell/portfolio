import styled, { keyframes } from "styled-components";

const move = keyframes`
0% {
    transform: scale(1, 1);
}
50% {
    transform: scale(1, 1.2) skewX(25deg);
}
100%{
    transform: scale(1, 1);
}
`;

export const WavesWrapper = styled.div`
  position: absolute;
  width: 110%;
  height: 15%;
  top: ${({ top }) => top}%;
  bottom: ${({ bottom }) => bottom}%;
`;

export const Wave = styled.div`
  position: absolute;
  width: 100%;
  height: 85%;
  background-color: #84cfc4;
  animation: ${move} 6s ease-in-out infinite;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat-x;

    height: 1vh;
    background-size: 2vh 2vh;
    background-image: radial-gradient(
      circle at 1vh -0.5vh,
      transparent 1.2vh,
      white 1.3vh
    );
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat-x;

    height: 1.5vh;
    background-size: 4vh 2vh;
    background-image: radial-gradient(
      circle at 1vh 1.5vh,
      white 1.2vh,
      transparent 1.3vh
    );
  }
`;

export const Foam = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
`;
