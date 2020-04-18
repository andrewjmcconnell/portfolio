import React, { useRef, createRef } from "react";

import { Dots, Dot, Select } from "./Paginator.styled";

const Paginator = ({ pages, index, setIndex }) => {
  const dotRefs = useRef([...Array(pages.length)].map(() => createRef()));
  return (
    <Dots>
      <Select index={index} />
      {dotRefs.current.map((dot, i) => (
        <Dot ref={dot} onClick={() => setIndex(i)} />
      ))}
    </Dots>
  );
};

export default Paginator;
