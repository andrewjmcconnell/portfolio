import React from "react";

import { Swiper, Item, Demo, Content, Button } from "./Slide.styled";

const Slide = ({ spacing }) => (
  <Swiper spacing={spacing}>
    <Item>
      <Demo></Demo>
      <Content>
        <Button></Button>
      </Content>
    </Item>
  </Swiper>
);

export default Slide;
