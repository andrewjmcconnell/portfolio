import React, { useState, useRef, createRef, useEffect } from "react";

import { AccordionWrapper, List, Item, Logo, Text } from "./Accordion.styled";

const AccordionItem = ({ componentRef, total, index, selected, content }) => (
  <Item
    ref={componentRef}
    total={total}
    index={`${index}`}
    focus={index >= selected}
  >
    <Logo src={content.img} alt="" />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  </Item>
);

const Accordion = ({ content }) => {
  const [focusedIndex, setFocusedIndex] = useState(content.length);
  const contentRefs = useRef([...Array(content.length)].map(() => createRef()));

  
  useEffect(() => {
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
  
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [content.length]);

  return (
    <AccordionWrapper>
      <List>
        {content.map((item, index) => (
          <AccordionItem
            key={item.img}
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
