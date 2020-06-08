import styled, { keyframes } from "styled-components";

export const Swiper = styled.div`
  display: flex;
  min-width: 90vw;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  margin-right: ${({ spacing }) => spacing};
  border-radius: 25px;
  transform: translateX(5vw);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 2vmax;
`;

export const Demo = styled.div`
  border-radius: 50%;
  width: 7.5vmax;
  height: 7.5vmax;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding-right: 5vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0 30px;
`;

export const ButtonWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.a`
  position: relative;
  padding: 20px 50px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: 200px;
  overflow: hidden;
  border-radius: 40px;

  span {
    position: relative;
    color: #fff;
    fot-size: 20px;
    font-family: Arial;
    letter-spacing: 8px;
  }

  &:hover {
    div {
      top: -120px;
    }
  }
`;

const animate = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
`;

export const ButtonLiquid = styled.div`
  position: absolute;
  top: -80px;
  left: 0;
  width: 200px;
  height: 200px;
  background: #4973ff;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;

  &:before,
  &:after {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  &:before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: ${animate} 5s linear infinite;
  }

  &:after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: ${animate} 10s linear infinite;
  }
`;

export const Title = styled.div`
  font-style: italic;
  padding-top: 5vmin;
  font-size: 2.5vmax;
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const Description = styled.div`
  font-size: 2vmax;
  color: ${({ theme }) => theme.colors.onBackground};
`;
