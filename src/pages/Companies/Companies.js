import React from "react";

import Accordion from "../../components/Accordion";
import Fireflies from "../../animations/Fireflies";

import content from "./Companies.content";
import { Wrapper, Title, Content } from "../Pages.styled";
const Companies = ({ screen }) => (
  <Wrapper>
    <Title>Places I've Worked</Title>
    <Content flex={8}>
      <Accordion content={content} />
    </Content>
  </Wrapper>
);

export default Companies;
