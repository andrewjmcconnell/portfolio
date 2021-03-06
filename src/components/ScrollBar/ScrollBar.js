import React, { useState, useLayoutEffect, Fragment } from "react";

import { ScrollButton, ButtonLabel } from "./ScrollBar.styled";

import Arrow from "./Arrow";

const ScrollBar = ({ refs }) => {
  const [refIndex, setRefIndex] = useState(0);
  const listener = () => {
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
  const scroll = offset => () => {
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
        <ButtonLabel>Up</ButtonLabel>
        <Arrow upward />
      </ScrollButton>
      <ScrollButton
        position="bottom"
        fade={refIndex === refs.length - 1}
        onClick={scroll(1)}
      >
        <ButtonLabel>Down</ButtonLabel>
        <Arrow />
      </ScrollButton>
    </Fragment>
  );
};

export default ScrollBar;
