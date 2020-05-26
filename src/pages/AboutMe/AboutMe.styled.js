import styled, { keyframes } from "styled-components";

const carousel = keyframes`
    0%,  15%  { transform: translateZ(-35vw) rotateY(0); }
	20%, 35%  { transform: translateZ(-35vw) rotateY(-90deg); }
	40%, 55%  { transform: translateZ(-35vw) rotateY(-180deg); }
    60%, 75% { transform: translateZ(-35vw) rotateY(-270deg); }
    80%, 100% { transform: translateZ(-35vw) rotateY(-360deg); }
`;

export const Page = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 30vmax;
  height: 80vh;
  max-width: 50vw;
  max-height: 100vw;
  margin: 0;
  color: white;
  perspective: 1000px;
  transform-origin: center;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: ${({ rotate }) => `translateZ(-35vw) rotateY(${rotate}deg)`};
  transition: transform 3s cubic-bezier(0.77, 0, 0.175, 1);
//   animation: ${carousel} 10s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

export const Card = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transform-origin: center;
  border: none;

  &:nth-child(1) {
    background: #fdd94f;
    transform: rotateY(0) translateZ(35vw);
  }

  &:nth-child(2) {
    background: #f87949;
    transform: rotateY(90deg) translateZ(35vw);
  }

  &:nth-child(3) {
    background: #fbab48;
    transform: rotateY(180deg) translateZ(35vw);
  }

  &:nth-child(4) {
    background: #fbab48;
    transform: rotateY(270deg) translateZ(35vw);
  }

  * {
    transition: opacity 1.5s;
  }

  div {
    opacity: ${({ selected }) => (selected ? "1" : "0")};
  }

  img {
    opacity: ${({ selected }) => (selected ? "0" : "1")};
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 90%;
  object-fit: cover;
  vertical-align: middle;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const CardContent = styled.div`
  padding: 15px;
  text-align: left;
`;

export const CardTitle = styled.div`
  font-weight: 600;
  font-size: 6vmin;
`;

export const CardText = styled.div`
  font-weight: 400;
  font-size: 3vmin;
`;
