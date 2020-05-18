import React, { useState, useRef, createRef, useEffect } from "react";

import {
  AccordionWrapper,
  List,
  Item,
  Logo,
  Text,
  Info,
  Resume,
  Bullet
} from "./Accordion.styled";

const AccordionItem = ({
  componentRef,
  total,
  index,
  selected,
  img,
  position,
  description
}) => (
  <Item
    ref={componentRef}
    total={total}
    index={`${index}`}
    focus={index >= selected}
  >
    <Logo src={img} alt="" />
    <Info>
      <Text italicized>{position}</Text>
      <Resume>
        {description.map(item => (
          <Bullet key={item}>
            <Text>{item}</Text>
          </Bullet>
        ))}
      </Resume>
    </Info>
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
            {...item}
          />
        ))}
      </List>
    </AccordionWrapper>
  );
};

export default Accordion;
