import styled from "styled-components";

export const SwitcherOuterContainer = styled.div`
  box-sizing: border-box;
  display: block;
`;

export const SwitcherInnerContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: ${({ childGap }) => `calc((${childGap} / 2) * -1)`};
  > * {
    flex-grow: 1;
    ${({ maxChildrenOnly, breakpoint, childGap }) =>
      !maxChildrenOnly
        ? `flex-basis: calc((${breakpoint} - (100% - ${childGap})) * 999);`
        : ``};
    ${({ childGap }) => `margin: calc(${childGap} / 2);`}
  }
  ${({ largeChild, largeChildSize }) =>
    largeChild && largeChildSize
      ? `> :nth-child(${largeChild}) {
      flex-grow: ${largeChildSize};
    }`
      : ``}
  ${({ maxChildren }) =>
    maxChildren
      ? `> :nth-last-child(${maxChildren +
          1}), > :nth-last-child(${maxChildren + 1}) ~ * {
      flex-basis: 100%;
    }`
      : ``}
`;