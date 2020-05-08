import styled from "styled-components";

export const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

export const Background = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
`;

export const Img = styled.img`
  position: absolute;
  height: ${({ height }) => height}vmax;
  width: ${({ width }) => width}vmax;
  ${({ z }) => z && `z-index: ${z};`}
  ${({ extraStyles }) => extraStyles}
`;