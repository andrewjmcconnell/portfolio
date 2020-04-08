import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  0% {
    opacity: 0.0;
  }
  80%{
    letter-spacing: 8px;
  }
  100% {
    background-size: 300% 300%;
    opacity: 1.0;
  }
`;

const glow = keyframes`
  40% {
    text-shadow: 0 0 8px #fff;
  }
`;

export const Header = styled.div`
  opacity: 0.0;
  font-size: 5vmax;
  line-height: 5vmax;
  font-weight: bold;
  font-family: Graduate;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  background: 50% 100% / 50% 50% no-repeat
    radial-gradient(circle at bottom, #fff, transparent, transparent);
  background-clip: text;
  -webkit-background-clip: text;
  background-color: transparent;
  animation: ${reveal} 3s ease-in-out forwards 2s,
    ${glow} 2.5s linear infinite 2.2s;
`;