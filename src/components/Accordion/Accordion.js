import React, { useState, useRef, createRef, useEffect } from "react";

import {
  AccordionWrapper,
  List,
  Item,
  Logo
} from "./Accordion.styled";

const AccordionItem = ({ componentRef, total, index, selected, content }) => (
  <Item
    ref={componentRef}
    total={total}
    index={`${index}`}
    focus={index >= selected}
  ><Logo src={content.img} alt="" /></Item>
);

const Accordion = ({ content }) => {
  const [focusedIndex, setFocusedIndex] = useState(content.length);
  const contentRefs = useRef([...Array(content.length)].map(() => createRef()));

  const handleClick = ({ target }) => {
    setFocusedIndex(content.length);
    for (let i = 0; i < contentRefs.current.length; i++) {
      let ref = contentRefs.current[i];
      if (ref.current.contains(target)) {
        setFocusedIndex(i);
        break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <AccordionWrapper>
      <List>
        {content.map((item, index) => (
          <AccordionItem
            componentRef={contentRefs.current[index]}
            total={`${content.length}`}
            index={index}
            selected={focusedIndex}
            content={item}
          />
        ))}
      </List>
    </AccordionWrapper>
  );
};

export default Accordion;
