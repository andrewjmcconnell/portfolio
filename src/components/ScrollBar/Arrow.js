import React from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
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

const ArrowWrapper = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;

  display: flex;
  ${({ upward }) => upward && "transform: rotate(180deg);"}
`;

const Chevron = styled.div`
  position: absolute;
  width: 60px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${move} 3s ease-out infinite;

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 0;

    height: 100%;
    width: 51%;
    background: ${({ theme }) => theme.colors.onBackground};
    transition: background 1s cubic-bezier(0.5, -0.75, 0.05, 1);
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  &:first-child {
    animation: ${move} 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: ${move} 3s ease-out 2s infinite;
  }
`;

const Arrow = ({ upward }) => (
  <ArrowWrapper upward={upward}>
    <Chevron id="1" />
    <Chevron id="2" />
    <Chevron id="3" />
  </ArrowWrapper>
);

export default Arrow;
