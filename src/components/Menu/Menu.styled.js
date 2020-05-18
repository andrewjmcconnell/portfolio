import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Base = styled.div`
  z-index: 10;
  will-change: width, height, top;
  overflow: hidden;
  position: fixed;
  top: 0; //${({ visible }) => visible ? "0" : "-98px"};
  left: 0px;
  background-color: #ffffff;
  width: 9.8vh;
  height: 9.8vh;
  transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1), top 0.6s;
  border-bottom-right-radius: 100%;

  ${({ theme }) =>
    theme.close &&
    `
    width: 30vh;
    height: 30vh;
    transition: all 1.25s cubic-bezier(0.50, 0, 0.05, 1.75);
  `}
`;

export const MenuDiv = styled.div`
  z-index: 50;
  will-change: width, height;
  background-color: ${({ theme }) => theme.colors.background};
  position: absolute;
  top: 0;
  left: 0;
  width: 10vh;
  height: 10vh;
  border-bottom-right-radius: 20vh;
  box-shadow: 5px 5px 2.5px grey;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1), background-color 1s ease;

  ${({ theme }) =>
    theme.close &&
    `
    width: 15vh;
    height: 15vh;
    transition: all 1s cubic-bezier(0.50, 0, 0.05, 1.75), background-color 1s ease;
  `}
`;

export const Icon = styled.div`
  position: absolute;
  width: 2.5vh;
  height: 2.5vh;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -100%);

  &:before,
  &:after {
    content: "";
    will-change: top, background-color;
    transform: rotate(0deg);
    transition: top 0.5s ease 0.5s, transform 0.5s ease,
      background-color 0.75s ease 0.25s;

    position: absolute;
    height: .5vh;
    left: 0px;
    right: 0px;
    border-radius: .5vh;
    background-color: ${({ theme }) => theme.colors.onBackground};
  }

  &:before {
    top: 0;
  }
  &:after {
    top: initial;
    top: 2vh;
  }

  ${({ theme }) =>
    theme.close &&
    `
  &:before,
  &:after {
    top: 1vh;
    background-color: ${({ theme }) => theme.colors.onBackground};
    transition: top 0.5s linear, transform 0.5s ease 0.5s, background-color 0.75s ease 0.25s;
  }
  &:before {
    transform: rotate(-45deg);
  }
  &:after {
    transform: rotate(45deg);
  }
  `}
`;

export const Bar = styled.div`
  will-change: opacity, background-color;
  transition: opacity 0s linear 0.5s, background-color 0.75s ease 0.25s;
  opacity: 1;
  top: 1vh;

  position: absolute;
  height: 0.5vh;
  left: 0;
  right: 0;
  border-radius: 0.5vh;
  background-color: ${({ theme }) => theme.colors.onBackground};

  ${({ theme }) =>
    theme.close &&
    `
    background-color: ${({ theme }) => theme.colors.onBackground};
    opacity: 0;
  `}
`;

export const Icons = styled.div`
  z-index: 40;
  position: absolute;
  top: 0;
  left: 0;
  > * {
    position: absolute;
    font-size: 4vh;
    color: #21264b;
    transition: 0.3s cubic-bezier(0.5, -0.25, 0.05, 1);

    ${({ theme }) =>
      theme.close &&
      `
    position: absolute;
    font-size: 4vh;
    color: #21264B;
    transition: 0.3s cubic-bezier(0.5, 0, 0.05, 1.75) 0.7s;
    pointer-events: none;

    width: 3.5vh;
    height: 4vh;
    `}
  }

  ${({ theme }) =>
    theme.close &&
    `
    position: absolute;
    top: 0;
    left: 0;
  `}
`;
export const ButtonOne = styled.img`
  top: 3.5vh;
  left: 0;
  transition-delay: 0.2s;

  ${({ theme }) =>
    theme.close &&
    `
  left:200px;
  transition-delay: 0.5s;
  `}
`;
export const ButtonTwo = styled.img`
  top: 0;
  left: 0;
  color: #fff;
  transition-delay: 0.1s;

  ${({ theme }) =>
    theme.close &&
    `
  top: 14.1vh;
  left: 14.1vh;
  transition-delay: 0.65s;
  `}
`;
export const ButtonThree = styled.img`
  top: 0;
  left: 3.5vh;

  ${({ theme }) =>
    theme.close &&
    `
  top: 20vh;
  transition-delay: 0.8s;
  `}
`;

export const Section = styled.div`
  z-index: 30;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  transform-origin: 100% 100%;
  transform: rotate(135deg);
`;

export const CoverOne = styled.div`
  transform-origin: 100% 100%;
  & {
    will-change: transform;
    position: absolute;
    width: 60vh;
    height: 60vh;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -100%) rotate(4deg);
    overflow: hidden;
    pointer-events: none;
    transition: transform 0.5s ease-in;
  }

  ${({ theme }) =>
    theme.close &&
    `
  transform-origin: 100% 100%;

  & {
    will-change: transform;
    position: absolute;
    width: 60vh;
    height: 60vh;

    top: 50%;
    left: 50%;
    transform: translate(-100%, -100%) rotate(16deg);
    overflow: hidden;
    transition:transform 0.5s ease-in 0.5s;
  }
  `}
`;

export const CoverTwo = styled.div`
  position: absolute;
  will-change: transform;
  width: 60vh;
  height: 60vh;

  top: 50%;
  left: 50%;
  transform: translate(-100%, -100%) rotate(4deg);
  overflow: hidden;
  pointer-events: none;
  transition: transform 0.5s ease-in;

  transform: translate(50%, -50%) rotate(-8deg);
  transform-origin: 0% 100%;

  ${({ theme }) =>
    theme.close &&
    `
  position: absolute;
  width: 60vh;
  height: 60vh;

  top: 50%;
  left: 50%;
  transform: translate(-100%, -100%) rotate(16deg);
  overflow: hidden;
  transition:transform 0.5s ease-in 0.5s;

  transform: translate(50%, -50%) rotate(-32deg);
  tranform-origin: 0% 100%;
  `}
`;

export const Content = styled.button`
  will-change: background-color, width, height;
  border-width: 0;
  cursor: pointer;
  position: absolute;

  width: 15vh;
  height: 15vh;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  top: 100%;
  left: 0%;
  transform: translate(-50%, -50%);
  transition: background-color 0s,
    width 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s,
    height 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s;
  pointer-events: auto;

  ${({ theme }) =>
    theme.close &&
    `
  position: absolute;
  width: 60vh;
  height: 60vh;

  border-radius: 100%;
  top: 100%;
  left: 0%;
  transform: translate(-50%, -50%);
  transition: background-color 0s, width 1.1s cubic-bezier(0.50, 0, 0.05, 1.75) 0.25s, height 1.1s cubic-bezier(0.50, 0, 0.05, 2) 0.25s;
  &:hover {
     background-color: ${({ theme }) => theme.colors.primaryVariant};
  }
  `}
`;

export const Top = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.background};
  will-change: width, height;
  width: 10vh;
  height: 10vh;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0% 0%;
  transition: width 1s cubic-bezier(0.5, -0.75, 0.05, 1),
    height 1s cubic-bezier(0.5, -0.75, 0.05, 1);
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryVariant};
  }

  transform: rotate(164deg);
  border-bottom-right-radius: 40vh;

  ${({ theme }) =>
    theme.close &&
    `
      width:30vh;
      height:30vh;
      transition: width 1.25s cubic-bezier(0.50, 0, 0.05, 2), height 1.25s cubic-bezier(0.50, 0, 0.05, 2);
  `}
`;

export const Bottom = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  will-change: width, height;
  cursor: pointer;
  padding: 0;
  border-width: 0px;
  z-index: 20;
  width: 10vh;
  height: 10vh;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0% 0%;
  transition: width 1s cubic-bezier(0.5, -0.75, 0.05, 1),
    height 1s cubic-bezier(0.5, -0.75, 0.05, 1);
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryVariant};
  }

  transform: rotate(286deg);
  border-bottom-right-radius: 40vh;

  ${({ theme }) =>
    theme.close &&
    `
      width: 30vh;
      height: 30vh;
      transition: width 1.25s cubic-bezier(0.50, 0, 0.05, 2), height 1.25s cubic-bezier(0.50, 0, 0.05, 2);
  `}
`;
