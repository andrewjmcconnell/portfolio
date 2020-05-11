import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Subtitle = styled.div`
z-index: 5;
padding-bottom: 10%;
font-family: Graduate;
font-size: 3vmax;
color: ${({ theme }) => theme.colors.onBackground};
`;


const Intro = () => {
  return (
    <Wrapper>
      <Header>Andrew McConnell</Header>
      <Subtitle>Frontend Engineer</Subtitle>
    </Wrapper>
  );
};

export default Intro;
