import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MobileContainer = styled.div`
  display: block;
  position: fixed;
  margin: 0 auto;
  z-index: 1;

  width: 100%;
`;

export const MobileIcon = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: white;

  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 3px;
    background-color: #333;
    border-radius: 3px;
    transition: 0.4s;
    transform: rotate(0deg);
  }

  &:before {
    transform: translate(15px, 8px);

    ${({ theme }) =>
      theme.close &&
      "transform: translate(15px, 18px) rotate(-45deg); opacity: 1;"}
  }

  &:after {
    transform: translate(-15px, 28px);
    ${({ theme }) =>
      theme.close &&
      "transform: translate(-15px, 18px) rotate(45deg); opacity: 1;"}
  }
`;

export const MobileBar = styled.div`
  position: fixed;
  top: 18px;
  width: 30px;
  height: 3px;
  background-color: #333;
  border-radius: 3px;
  transition: 0.4s;

  ${({ theme }) => theme.close && "opacity: 0;"}
`;

export const DropdownBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: transparent;
`;

export const MobileButtonLink = styled(NavLink)`
  position: fixed;
  margin-top: 0.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: white;
  opacity: 0;
  transition: 0.4s;
  transform: translate(0, -5rem);

  ${({ theme }) =>
    theme.close && "transform: translate(0, 0.5rem); opacity: 1;"}
`;

export const MobileButton = styled.button`
  position: fixed;
  padding: 0;
  margin-top: 0.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: white;
  opacity: 0;
  transition: 0.4s;
  transform: translate(0, -5rem);

  ${({ theme }) =>
    theme.close && "transform: translate(0, 0.5rem); opacity: 1;"}
`;

export const MobileImg = styled.img`
  transform: translate(0.25rem);
`;
