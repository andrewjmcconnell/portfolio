import React from "react";

import content from "./Projects.content";
import Carousel from "../../components/Carousel";

import { Wrapper, Title, Content } from "../Pages.styled";

const Projects = () => (
  <Wrapper>
    <Title>Projects I've Developed</Title>
    <Content flex={8}>
      <Carousel content={content} />
    </Content>
  </Wrapper>
);

export default Projects;
