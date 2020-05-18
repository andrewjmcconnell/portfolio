import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8vh 0;
`;

export const Content = styled.div`
  flex: ${({ flex }) => flex};
`;

export const Title = styled.h2`
  z-index: 5;
  flex: 1;
  margin: 0;
  font-size: 5vmax;
  font-weight: bold;
  font-family: Graduate;
  text-align: center;
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const Spacer = styled.div`
  height: 3vh;
`;