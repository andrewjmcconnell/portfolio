import React from "react";
import styled, { keyframes } from "styled-components";

const moveDown = keyframes`
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
`;

const moveUp = keyframes`
  25% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
  33% {
    opacity: 1;
    transform: translateY(40px);
  }
  67% {
    opacity: 1;
    transform: translateY(30px);
  }
  100% {
    opacity: 0.5;
    transform: translateY(15px) scale3d(0.5, 0.5, 0.5);;
  }
`;

const ArrowWrapper = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;

  display: flex;
`;

const Chevron = styled.div`
  position: absolute;
  width: 60px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${({ upward }) => (upward ? moveUp : moveDown)} 3s ease-out ${({ upward }) => upward && "1s"}
    infinite;

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 0;

    height: 100%;
    width: 51%;
    background: ${({ theme }) => theme.colors.onBackground};
  }

  &:before {
    left: 0;
    transform: skew(0deg, ${({ upward }) => (!!upward ? "-30deg" : "30deg")});
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, ${({ upward }) => (!!upward ? "30deg" : "-30deg")});
  }

  &:first-child {
    animation: ${({ upward }) => (upward ? moveUp : moveDown)} 3s ease-out
      ${({ upward }) => (upward ? "3s" : "1s")} infinite;
  }

  &:nth-child(2) {
    animation: ${({ upward }) => (upward ? moveUp : moveDown)} 3s ease-out
      ${({ upward }) => (upward ? "2s" : "2s")} infinite;
  }
`;

const Arrow = ({ upward }) => (
  <ArrowWrapper>
    <Chevron id="1" upward={upward} />
    <Chevron id="2" upward={upward} />
    <Chevron id="3" upward={upward} />
  </ArrowWrapper>
);

export default Arrow;
