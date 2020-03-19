import styled from "styled-components";

export const ClusterWrapper = styled.div`
  overflow: ${({ overflow }) => (overflow ? "visible" : "hidden")};
  box-sizing: border-box;
`;

export const ClusterInnerWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: calc(${({ childGap }) => childGap} / 2 * -1);
  min-height: ${({ minHeight }) => minHeight};
  > * {
    margin: calc(${({ childGap }) => childGap} / 2);
  }
`;