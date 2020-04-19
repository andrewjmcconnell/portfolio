import React, { useState } from "react";
import Paginator from "../Paginator";

import {
  Wrapper,
  SlideContainer,
  SlideWrapper,
  Slide,
  PaginationWrapper
} from "./Carousel.styled.js";

const Carousel = ({ content }) => {
  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      <SlideContainer>
        <SlideWrapper index={index} pages={content}>
          {content.map(page => (
            <Slide key={page.id}>{page.renderContent}</Slide>
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
