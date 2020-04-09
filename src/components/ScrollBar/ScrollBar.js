import React, { useState, useLayoutEffect, Fragment } from "react";

import { ScrollButton, ButtonImg } from "./ScrollBar.styled";

import ArrowUp from "tabler-icons/icons/arrow-up-circle.svg";
import ArrowDown from "tabler-icons/icons/arrow-down-circle.svg";

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
        <ButtonImg src={ArrowUp} alt="Scroll Up" />
      </ScrollButton>
      <ScrollButton
        position="bottom"
        fade={refIndex === refs.length - 1}
        onClick={scroll(1)}
      >
        <ButtonImg src={ArrowDown} alt="Scroll Down" />
      </ScrollButton>
    </Fragment>
  );
};

export default ScrollBar;
