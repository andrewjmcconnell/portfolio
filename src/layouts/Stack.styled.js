import styled from "styled-components";

export const StackWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: flex-start;
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
  > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  > * + * {
    ${({ direction, childGap }) =>
      direction === "row"
        ? `margin-left: ${childGap};`
        : `margin-top: ${childGap};`}
  }
  ${({ bottomItem, direction }) =>
    bottomItem
      ? `
    > :nth-child(${bottomItem}) {
        ${direction === "row" ? "margin-left: auto;" : "margin-top: auto;"}
    }
  `
      : ``};
`;