import React, { useState } from "react";
import Paginator from "../Paginator";

import {
  Wrapper,
  SlideContainer,
  SlideWrapper,
  PaginationWrapper
} from "./Carousel.styled.js";

import Slide from "../Slide";

const Carousel = ({ content }) => {
  const [index, setIndex] = useState(0);
  const spacing = "60vw";

  return (
    <Wrapper>
      <SlideContainer>
        <SlideWrapper index={index} pages={content} spacing={spacing}>
          {content.map(page => (
            <Slide key={page.id} spacing={spacing} {...page}  />
          ))}
        </SlideWrapper>
      </SlideContainer>
      <PaginationWrapper>
        <Paginator pages={content} index={index} setIndex={setIndex} />
      </PaginationWrapper>
    </Wrapper>
  );
};

export default Carousel;
