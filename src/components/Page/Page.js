import React, { useState } from "react";
import styled from "styled-components";
import Paginator from "../Paginator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  width: 70vw;
  height: 60vh;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: calc(100% * ${({ pages }) => pages.length});
  height: 100%;
  transform: translateX(calc(-100% * ${({ index }) => index}));
  transition: transform 1s;
`;

const Slide = styled.div`
  flex: none;
  width: 90%;
  height: 100%;
  margin: 0 5%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const PaginationWrapper = styled.div`
  margin: 2vh auto;
`;

const Page = () => {
  const [index, setIndex] = useState(0);
  const pages = ["formatted-input", "page2", "page3", "page4"];

  return (
    <Wrapper>
      <SlideContainer>
        <SlideWrapper index={index} pages={pages}>
          {pages.map(page => (
            <Slide id={page}>{page}</Slide>
          ))}
        </SlideWrapper>
      </SlideContainer>
      <PaginationWrapper>
        <Paginator pages={pages} index={index} setIndex={setIndex} />
      </PaginationWrapper>
    </Wrapper>
  );
};

export default Page;
