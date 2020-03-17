import React, { useState, useLayoutEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";

const MOBILE_WIDTH = 768;

const throttle = (delay, fn) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};

const withWindowSize = Child => ({ ...props }) => {
  const [state, setState] = useState({
    isMobile: window.innerWidth < MOBILE_WIDTH,
    supportsTouch: "ontouchstart" in window || navigator.maxTouchPoints > 1
  });
  const isMobileRef = useRef(state.isMobile);
  const onResize = throttle(25, () => {
    const width = window.innerWidth;
    const newMobileState = width <= MOBILE_WIDTH;
    if (newMobileState !== isMobileRef.current) {
      isMobileRef.current = newMobileState;
      setState({
        isMobile: width <= MOBILE_WIDTH,
        supportsTouch: "ontouchstart" in window || navigator.maxTouchPoints > 1
      });
    }
  });
  useLayoutEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);
  return (
    <ThemeProvider theme={state}>
      <Child {...props} />
    </ThemeProvider>
  );
};

export default withWindowSize;
