import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    // box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    // box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    // box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
`;

export const Container = styled.div`
  margin: 10px;
`;

export const Template = styled.div`
  display: flex;
  width: 12vmin;
  height: 12vmin;
  border: 5px ${({ theme }) => theme.colors.surface} solid;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  justify-content: center;
  // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  animation: ${float} 6s ease infinite;
  // animation-delay: ${({ delay }) => delay && `${delay * 2}s`};
  img {
    width: 100%;
    height: 100%;
  }
`;
