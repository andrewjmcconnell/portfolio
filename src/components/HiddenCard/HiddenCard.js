import React from "react";

import {
  SuperBox,
  Container,
  Box,
  IconWrapper,
  Helper,
  Icon,
  Title,
  Text,
  IconBackground
} from "./HiddenCard.styled";

const HiddenCard = ({ icon, title, description }) => (
  <SuperBox>
    <Container tabIndex="0" id="Container">
      <Box description={description}>
        <IconBackground />
      </Box>
      <IconWrapper>
        <Helper />
        <Icon src={icon} alt="" />
      </IconWrapper>
    </Container>
    <Text>
      <Title>{title}</Title>
    </Text>
  </SuperBox>
);

export default HiddenCard;
