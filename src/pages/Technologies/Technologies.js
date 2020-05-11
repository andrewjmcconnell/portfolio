import React from "react";
import styled from "styled-components";

import FloatingIcon from "../../components/FloatingIcon";

import {
  AppDevelopmentContent,
  SourceControlContent,
  CICDContent
} from "./Technologies.content";
import { Wrapper, Title, Content, Spacer } from "../Pages.styled";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppDevelopment = (
  <Row>
    {AppDevelopmentContent.map(content => (
      <FloatingIcon key={content.alt} content={content} />
    ))}
  </Row>
);

const SourceControl = (
  <Row>
    {SourceControlContent.map(content => (
      <FloatingIcon key={content.alt} content={content} />
    ))}
  </Row>
);

const CICD = (
  <Row>
    {CICDContent.map(content => (
      <FloatingIcon key={content.alt} content={content} />
    ))}
  </Row>
);

const Technologies = () => {
  return (
    <Wrapper>
      <Title>Technologies I Work With</Title>
      <Content flex={4}>
        {AppDevelopment}
        <Spacer />
        {SourceControl}
        <Spacer />
        {CICD}
      </Content>
    </Wrapper>
  );
};

export default Technologies;
