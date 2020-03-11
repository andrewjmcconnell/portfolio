import React, { useState, useLayoutEffect, Fragment } from "react";

import { ScrollButton, Scroll, ScrollFill, ButtonImg } from "./ScrollBar.styled";

import Arrow from "../../img/arrow_up.svg";
import Arrow2 from "../../img/arrow_up.svg";

const ScrollBar = ({ refs }) => {
  const [refIndex, setRefIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(
    document.documentElement.scrollTop
  );
  const listener = () => {
    setScrollPercent(
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
        100
    );
    var nextEl = refs[refIndex + 1]?.current.getBoundingClientRect();
    var prevEl = refs[refIndex - 1]?.current.getBoundingClientRect();
    if (nextEl?.top <= window.innerHeight / 2) setRefIndex(refIndex + 1);
    if (prevEl?.bottom >= window.innerHeight / 2) setRefIndex(refIndex - 1);
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  const scroll = offset => _ => {
    if (!!refs[refIndex + offset]) {
      refs[refIndex + offset].current.scrollIntoView({
        behavior: "smooth"
      });
      setRefIndex(refIndex + offset);
    }
  };
  return (
    <Fragment>
      <ScrollButton position="top" fade={refIndex === 0} onClick={scroll(-1)}>
        <ButtonImg img={Arrow} alt="" />
      </ScrollButton>
      <Scroll>
        <ScrollFill height={scrollPercent} />
      </Scroll>
      <ScrollButton
        position="bottom"
        fade={refIndex === refs.length - 1}
        onClick={scroll(1)}
      >
        <ButtonImg src={Arrow2} alt="" rotate />
      </ScrollButton>
    </Fragment>
  );
};

export default ScrollBar;
