import styled from "styled-components";

export const Dots = styled.ul`
  list-style-type: none;
  background: transparent;
  // -webkit-filter: blur(5px) contrast(10);
  padding: 0;
  margin: 0;
  position: relative;
  // filter: blur(2px) contrast(4);
`;

export const Dot = styled.div`
  display: inline-block;
  vertical-align: middle;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.onBackground};
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  color: white;
  position: relative;
  z-index: 2;
  margin-top: 5px;
`;

export const Select = styled.li`
  display: block;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.onBackground};
  opacity:0.6;
  transition:transform 300ms ease-in-out;
  position: absolute;
  z-index: 3;
  pointer-events: none;
  transform: translateX(calc(${({index}) => index} * 40px));
  transition: transform 1s ease-in-out;
`;
