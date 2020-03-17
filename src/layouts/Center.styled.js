import styled from "styled-components";

export const CenterWrapper = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ maxWidth }) => maxWidth};
  padding-left: ${({ gutters }) => gutters};
  padding-right: ${({ gutters }) => gutters};
  ${({ intrinsic }) =>
    intrinsic
      ? `
    display: flex;
    flex-direction: column;
    align-items: center;
  `
      : ``};
`;