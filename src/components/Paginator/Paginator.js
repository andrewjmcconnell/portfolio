import React, { useState } from "react";

import Circle from "./Circle";
import { Container, Index } from "./Paginator.styled";

const Paginator = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [flip, setFlip] = useState();
  const pages = [1, 2, 3, 4, 5];

  const resetState = () => {
    //   setOpen(false);
    setFlip(false);
  };

  const onClick = index => e => {
    resetState();
    setOpen(true);
    setSelected(index);
    if (current > index) {
      setFlip(true);
    }
    setCurrent(index);
  };

  return (
    <Container selected={selected} open={open} flip={flip}>
      <span>
        {pages.map((page, i) => (
          <Index onClick={onClick(i)}>{page}</Index>
        ))}
      </span>
      <Circle />
    </Container>
  );
};

export default Paginator;
