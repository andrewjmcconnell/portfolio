import React, { useState } from "react";
import { withTheme } from "styled-components";

import {
  Page,
  Wrapper,
  Content,
  Card,
  Img,
  CardContent,
  CardTitle,
  CardText
} from "./AboutMe.styled";
import content from "./AboutMe.content";

const AboutMe = ({ theme }) => {
  const [selected, setSelected] = useState(0);
  const [rotate, setRotate] = useState(0);

  const onClick = e => {
    const index = e.currentTarget.id;
    setSelected(parseInt(index));
    setRotate(-90 * parseInt(index));
  };

  return (
    <Page>
      <Wrapper>
        <Content rotate={rotate}>
          {content.map((card, index) => (
            <Card
              key={index}
              id={index}
              selected={index === selected}
              onClick={onClick}
            >
              <CardContent>
                <CardTitle>{card.name}</CardTitle>
                <CardText>{card.text}</CardText>
              </CardContent>
              <Img src={card.image} />
            </Card>
          ))}
        </Content>
      </Wrapper>
    </Page>
  );
};

export default withTheme(AboutMe);
