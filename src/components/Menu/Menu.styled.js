import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Base = styled.div`
  z-index: 1;
  overflow-x: hidden;
  position: fixed;
  top: ${({ visible }) => visible ? "0" : "-98px"};
  left: 0px;
  background-color: #ffffff;
  width: 98px;
  height: 98px;
  transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1), top 0.6s;
  border-bottom-right-radius: 100%;

  ${({ theme }) =>
    theme.close &&
    `
    width: 300px;
    height: 300px;
    transition: all 1.25s cubic-bezier(0.50, 0, 0.05, 1.75);
  `}
`;

export const MenuDiv = styled.div`
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.background};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 100px;
  border-bottom-right-radius: 200px;
  box-shadow: 5px 5px 2.5px grey;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1), background-color 1s ease;

  ${({ theme }) =>
    theme.close &&
    `
    width: 150px;
    height: 150px;
    transition: all 1s cubic-bezier(0.50, 0, 0.05, 1.75), background-color 1s ease;
    background-color: ${({ theme }) => theme.colors.background};
  `}
`;

export const Icon = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -100%);

  &:before,
  &:after {
    content: "";
    transform: rotate(0deg);
    transition: top 0.5s ease 0.5s, transform 0.5s ease,
      background-color 0.75s ease 0.25s;

    position: absolute;
    height: 5px;
    left: 0px;
    right: 0px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.onBackground};
  }

  &:before {
    top: 0px;
  }
  &:after {
    top: initial;
    top: 20px;
  }

  ${({ theme }) =>
    theme.close &&
    `
  &:before,
  &:after {
    top: 10px;
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
  transition: opacity 0s linear 0.5s, background-color 0.75s ease 0.25s;
  opacity: 1;
  top: 10px;

  position: absolute;
  height: 5px;
  left: 0px;
  right: 0px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.onBackground};

  ${({ theme }) =>
    theme.close &&
    `
    background-color: ${({ theme }) => theme.colors.onBackground};
    opacity: 0;
  `}
`;

export const Icons = styled.div`
  z-index: 4;
  position: absolute;
  top: 0px;
  left: 0px;
  > * {
    position: absolute;
    font-size: 40px;
    color: #21264b;
    transition: 0.3s cubic-bezier(0.5, -0.25, 0.05, 1);

    ${({ theme }) =>
      theme.close &&
      `
    position: absolute;
    font-size: 40px;
    color: #21264B;
    transition: 0.3s cubic-bezier(0.5, 0, 0.05, 1.75) 0.7s;
    pointer-events: none;

    width: 35px;
    height: 40px;
    `}
  }

  ${({ theme }) =>
    theme.close &&
    `
    position: absolute;
    top:0px;
    left:0px;
  `}
`;
export const ButtonOne = styled.img`
  top: 35px;
  left: 0px;
  transition-delay: 0.2s;

  ${({ theme }) =>
    theme.close &&
    `
  left:200px;
  transition-delay: 0.5s;
  `}
`;
export const ButtonTwo = styled.img`
  top: 0px;
  left: 0px;
  color: #fff;
  transition-delay: 0.1s;

  ${({ theme }) =>
    theme.close &&
    `
  top: 141px;
  left: 141px;
  transition-delay: 0.65s;
  `}
`;
export const ButtonThree = styled.img`
  top: 0px;
  left: 35px;

  ${({ theme }) =>
    theme.close &&
    `
  top: 200px;
  transition-delay: 0.8s;
  `}
`;

export const Section = styled.div`
  z-index: 3;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 0px;
  width: 0px;
  transform-origin: 100% 100%;
  transform: rotate(135deg);
`;

export const CoverOne = styled.div`
  transform-origin: 100% 100%;
  & {
    position: absolute;
    width: 600px;
    height: 600px;
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
    position: absolute;
    width: 600px;
    height: 600px;

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
  width: 600px;
  height: 600px;

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
  width: 600px;
  height: 600px;

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
  border-width: 0;
  cursor: pointer;
  position: absolute;
  width: 600px;
  height: 600px;

  width: 150px;
  height: 150px;
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
  width: 600px;
  height: 600px;

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
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0px;
  left: 0px;
  transform-origin: 0% 0%;
  transition: width 1s cubic-bezier(0.5, -0.75, 0.05, 1),
    height 1s cubic-bezier(0.5, -0.75, 0.05, 1);
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryVariant};
  }

  transform: rotate(164deg);
  border-bottom-right-radius: 400px;

  ${({ theme }) =>
    theme.close &&
    `
      width:300px;
      height:300px;
      transition: width 1.25s cubic-bezier(0.50, 0, 0.05, 2), height 1.25s cubic-bezier(0.50, 0, 0.05, 2);
  `}
`;

export const Bottom = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  padding: 0;
  border-width: 0px;
  z-index: 2;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0px;
  left: 0px;
  transform-origin: 0% 0%;
  transition: width 1s cubic-bezier(0.5, -0.75, 0.05, 1),
    height 1s cubic-bezier(0.5, -0.75, 0.05, 1);
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryVariant};
  }

  transform: rotate(286deg);
  border-bottom-right-radius: 400px;

  ${({ theme }) =>
    theme.close &&
    `
      width:300px;
      height:300px;
      transition: width 1.25s cubic-bezier(0.50, 0, 0.05, 2), height 1.25s cubic-bezier(0.50, 0, 0.05, 2);
  `}
`;
