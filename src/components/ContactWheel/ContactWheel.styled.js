import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Menu = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80px;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  font-size: 26px;
`;

export const Hub = styled.div`
  background: #eeeeee;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  position: absolute;
  color: #ffffff;
  text-align: center;
  line-height: 80px;
  transform: translate(0, 0);
  transition: transform ease-out 200ms;
  z-index: 5;
  cursor: pointer;

  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 400ms;
  transform: scale(1.1, 1.1) translate(0, 0);
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);

  &:hover {
    transform: scale(1.2, 1.2) translate(0, 0);
  }

  ${({ isOpen }) => isOpen && "transform: translate(0, 0) scale(0.8);"}

  * {
    width: 25px;
    height: 3px;
    background: #596778;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -12.5px;
    margin-top: -1.5px;
    transition: transform 200ms;
  }
`;

export const LineOne = styled.span`
  transform: translate(0, -8px);

  ${({ isOpen }) => isOpen && "transform: translate(0, 0) rotate(45deg);"}
`;

export const LineTwo = styled.span`
  transform: translate(0, 0);

  ${({ isOpen }) => isOpen && "transform: translate(0, 0) scale(0.1, 1);"}
`;

export const LineThree = styled.span`
  transform: translate(0, 8px);

  ${({ isOpen }) => isOpen && "transform: translate(0, 0) rotate(-45deg);"}
`;

export const Button = styled.button`
  background: #eeeeee;
  border-radius: 100%;
  width: 5vmax;
  height: 5vmax;
  margin-left: -40px;
  position: absolute;
  color: #ffffff;
  text-align: center;
  line-height: 80px;
  transform: translate(0, 0);
  transition: transform ease-out 200ms;
  cursor: pointer;
  z-index: 4;

  ${({ isOpen }) =>
    isOpen && "transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);"}

  ${({ isOpen }) =>
    isOpen &&
    `
    &:nth-child(5) {
        transform: translate(10vmax, 10vmax);
    }
    &:nth-child(2) {
        transform: translate(10vmax, -10vmax);
    }
    &:nth-child(3) {
        transform: translate(-10vmax, -10vmax);
    }
    &:nth-child(4) {
        transform: translate(-10vmax, 10vmax);
    }
  `}
`;

export const FacebookIcon = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  color: #0037C1;
  font-size: 2.5vmax;
`;

export const GithubIcon = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  color: black;
  font-size: 2.5vmax;
`;

export const LinkedInIcon = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  color: #0B66C2;
  font-size: 2.5vmax;
`;

export const EmailIcon = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  color: #F14436;
  font-size: 2.5vmax;
`;
