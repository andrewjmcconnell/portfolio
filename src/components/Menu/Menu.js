import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Box } from "../../layouts";

const MenuWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const ButtonContent = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  font-weight: 400;
  position: relative;
  z-index: 999;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #000000;
    transition: 0.3s ease-in-out;
  }
`;

const ButtonEffect = styled(NavLink)`
  width: 200px;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  position: relative;
  background-color: #5c6ac4;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    width: 140%;
    height: 100%;
    background-color: #ffffff;
    transform: rotate(10deg);
    top: -150%;
    left: 20%;
    transition: 0.3s ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    width: 140%;
    height: 120%;
    background-color: #ffffff;
    transform: rotate(10deg);
    top: 150%;
    left: -20%;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    background-color: #ffffff;
    transition: 0s linear;
    transition-delay: 0.3s;
  }

  &:hover:before {
    top: -20px;
    left: -20%;
    transition: 0.3s ease-in-out;
  }

  &:hover:after {
    top: 10px;
    left: -23%;
    transition: 0.3s ease-in-out;
  }
`;

const Menu = ({ location }) => {
  const home = location.pathname === "/";
  return (
    <MenuWrapper>
      <ButtonWrapper>
        <ButtonEffect to={home ? "/about" : "/"}>
          <ButtonContent>{home ? "About Me" : "Close"}</ButtonContent>
        </ButtonEffect>
      </ButtonWrapper>
    </MenuWrapper>
  );
};
export default withRouter(Menu);
