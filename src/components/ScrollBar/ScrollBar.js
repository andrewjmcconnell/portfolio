import React, { useState, useLayoutEffect, Fragment } from "react";

import { ScrollButton, Scroll, ScrollFill } from "./ScrollBar.styled";

const ScrollBar = ({ refs }) => {
  const [refIndex, setRefIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(
    document.documentElement.scrollTop
  );
  const pageHeight = document.documentElement.offsetHeight - window.innerHeight;
  const listener = () => {
    setScrollPosition(document.documentElement.scrollTop);
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
      <ScrollButton position="top" onClick={scroll(-1)}>
        up
      </ScrollButton>
      <Scroll>
        <ScrollFill height={-(scrollPosition / pageHeight) * 50} />
      </Scroll>
      <ScrollButton position="bottom" onClick={scroll(1)}>
        down
      </ScrollButton>
    </Fragment>
  );
};

export default ScrollBar;
