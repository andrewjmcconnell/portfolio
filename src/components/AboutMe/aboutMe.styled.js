import styled, { keyframes } from "styled-components";

export const AboutMeMenu = styled.div`
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%
    width: 100%;
    display: none;
`;

export const MenuSecondaryBackgroundColor = styled.div`
    background-color: black;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%
    width: 100%;
`;

export const MenuLayer = styled.div`
  position: relative;
  background-color: red;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

export const cameraPan = keyframes`
    0% {
        background-position: 0% 0%;
    }
    25% {
        background-position: 40% 10%;
    }
    50% {
        background-position: 0% 10%;
    }
    75% {
        background-position: 10% 40%;
    }
    100% {
        background-position: 0% 0%;
    }
`;

export const MenuCityBackground = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${cameraPan} 30s infinite;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 200px 0 200px 150px;
  width: 50%;
`;

export const InfoWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
`;

export const Info = styled.div`
  height: 100%;
  float: right;
  color: white;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 150px;
  font-family: 'Poppins', sans-serif;
`;

export const Location = styled.div`
  color: white;
  font-family: 'Bangers', cursive;
  font-size: 6rem;
  font-weight: 700;
  cursor: pointer;
  height: 135px;
  overflow: hidden;
  &:hover {
    color: black;
  }
`;
