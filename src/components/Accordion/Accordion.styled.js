import styled, { keyframes } from "styled-components";

export const AccordionWrapper = styled.div`
  height: 60vh;
  width: 90vw;
  background-color: transparent;
  display: grid;
  grid-template-rows: 100%;
//   overflow: hidden;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    position: relative;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  grid-row: 1 / -1;
  display: grid;
  height: 100%;
  counter-reset: list;
`;

const slideUp = keyframes`
  from {
    transform: translateY(130%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%) translateX(calc(-100% + 10vw));
    pointer-events: none;
  }
  to {
    transform: translateY(0) translateX(calc(-100% + 10vw));
    pointer-events: none;
  }
`;

export const Item = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: grid;
  grid-template-columns: 1fr 20% auto;
  position: absolute;
  height: 60vh;
  width: 60vw;
  transition: transform 0.6s cubic-bezier(0.8, 0, 0.2, 1);

  margin-left: calc(${({ index }) => index} * 10vw);

//   overflow: hidden;

  transform: translateX(calc(-100% + 10vw));

  z-index: calc(${({ total }) => total} - ${({ index }) => index});

  padding-right: 1vw;

  &:hover:not(:focus):after {
    transform: none;
  }

  ${({ focus }) =>
    focus &&
    `transform: translateX(-2vw);
  outline: none;
  transform: none;`}

  &:before {
    display: block;
    grid-column: 3 / 4;
    text-align: right;
    font-size: 8vmin;
    padding: 1vw;
    padding-top: 10vh;
    mix-blend-mode: soft-light;
    z-index: 1;
    animation: ${slideUp};
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 1vw;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    transform: translateX(-1vw);
    transition: transform cubic-bezier(0.8, 0, 0.2, 1) 0.6s;
    border-radius: 15px;
    box-shadow: 13px 0px 3px 0px rgba(0,0,0,0.75);
  }

  animation: ${slideDown} 1s cubic-bezier(0.5, 0, 0.3, 1);
  animation-delay: calc(${({ index }) => index} * 0.15s);
  animation-fill-mode: backwards;
`;

export const Logo = styled.img`
    z-index: 1;
    max-width: 60vh;
    margin-left: auto;
    margin-top: 22.5vh;
    transform: rotate(90deg);
`;