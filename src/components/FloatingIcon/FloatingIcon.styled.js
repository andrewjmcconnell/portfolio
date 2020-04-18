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
  position: relative;
  margin: 10px;
`;

export const Template = styled.div`
  position: relative;
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

export const Icon = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const TooltipWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: -5vmin;
  top: 12vmin;
  width: 24vmin;
  font-weight: 400;
  text-transform: none;
  word-wrap: normal;
  font-size: 12px;

  display: inline-block;

  margin-top: 3vmin;

  animation: ${float} 6s ease infinite;

  ${({ display }) => (display ? "opacity: 1;" : "opacity: 0;")}
`;

export const TooltipArrow = styled.div`
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;

  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-right-color: transparent;
  border-style: solid;
`;

export const TooltipText = styled.div`
  max-width: 200px;
  padding: 3px 8px;
  color: ${({ theme }) => theme.colors.onBackground};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
`;