import styled from "styled-components";

export const FrameOuterContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: ${({ numerator, denominator }) =>
    `calc((${numerator} / ${denominator}) * 100%)`};
  position: relative;
  > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > img,
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;