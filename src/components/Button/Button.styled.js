import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  margin: 20px;

  color: #27a9e1;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  min-width: 130px;
  background-color: white;
  border: 2px solid #27a9e1;

  z-index: 10;

  :focus {
    outline: none;
    background-color: #eaf2f8;
    box-shadow: 0 0 10px #eaf2f8;
  }

  :hover {
    cursor: pointer;
    background-color: #0076ae;
    color: white;
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
  }
`;