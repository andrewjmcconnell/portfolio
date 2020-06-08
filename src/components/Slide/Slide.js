import React from "react";

import {
  Swiper,
  Item,
  Demo,
  Content,
  Title,
  Description,
  ButtonWrapper,
  Button,
  ButtonLiquid
} from "./Slide.styled";

const Slide = ({ spacing, title, description, link, linkTitle, icon }) => (
  <Swiper spacing={spacing}>
    <Item>
      <Demo>{icon}</Demo>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonWrapper>
          <Button href={link}>
            <ButtonLiquid />
            <span>{linkTitle}</span>
          </Button>
        </ButtonWrapper>
      </Content>
    </Item>
  </Swiper>
);

export default Slide;
