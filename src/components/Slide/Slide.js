import React from "react";

import {
  Swiper,
  Item,
  Demo,
  Content,
  Title,
  Description,
  ButtonWrapper,
  Button
} from "./Slide.styled";

const Slide = ({ spacing, title, description, link, content }) => (
  <Swiper spacing={spacing}>
    <Item>
      <Demo>{content}</Demo>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonWrapper>
          <Button href={link}>Click me!</Button>
        </ButtonWrapper>
      </Content>
    </Item>
  </Swiper>
);

export default Slide;
