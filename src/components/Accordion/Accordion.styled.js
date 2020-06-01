import styled, { keyframes } from "styled-components";

export const AccordionWrapper = styled.div`
  height: 60vh;
  width: 90vw;
  background-color: transparent;

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

  height: 100%;
  counter-reset: list;
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
  padding: 10px;
  list-style-type: none;
  position: absolute;
  height: 60vh;
  width: 60vw;
  transition: transform 0.6s cubic-bezier(0.8, 0, 0.2, 1);
  margin-left: calc(${({ index }) => index} * 10vw);
  transform: translateX(calc(-100% + 10vw));
  z-index: calc(${({ total }) => total} - ${({ index }) => index} + 5);
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 15px;
  box-shadow: 0px 2px 14px 0px rgb(246, 246, 249), 0px 3px 8px 0px rgb(202, 206, 216);
  text-align: right;
  cursor: pointer;

  &:hover:not(:focus) {
    transform: ${({ focus }) =>
      focus ? "translateX(11vw)" : "translateX(calc(-100% + 11vw))"};
  }

  ${({ focus }) =>
    focus &&
    `transform: translateX(10vw);
  outline: none;`}

  animation: ${slideDown} 1s cubic-bezier(0.5, 0, 0.3, 1);
  animation-delay: calc(${({ index }) => index} * 0.15s);
  animation-fill-mode: backwards;

`;

export const Logo = styled.img`
  z-index: 1;
  position: absolute;
  width: 58vh;
  max-height: 12vw;
  ${({ theme }) => theme.isMobile && "height: 15vw;"}
  transform: rotate(90deg);
  transform-origin: left top;
`;

export const Text = styled.div`
  text-align: center;
  padding-right: 12vw;
  font-size: 1.5vmax;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.onBackground};

  ${({ italicized }) => italicized && `font-style: italic;`}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 1vmax;
`;

export const Resume = styled.ul`
  list-style: none outside none;
  margin-left: 0;
  padding-left: 0;
`;

export const Bullet = styled.li`
  color: ${({ theme }) => theme.colors.onBackground};
`;
