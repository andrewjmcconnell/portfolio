import React from "react";
import styled from "styled-components";

import { Box, Center, Stack, Text } from "../../layouts";
import Header from "../../components/Header";

import Space from "../../animations/Space";

const SpaceWrapper = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
`;

const Intro = () => {
  return (
    <Box padding="0" minWidth="100%" minHeight="100%">
      <Space />
      {/* <SpaceWrapper>
        <Space />
      </SpaceWrapper>
      <Center intrinsic>
        <Stack childGap="50px">
          <Header>Andrew McConnell</Header>
          <Text fontSize="3vmax" textAlign="center" fontFamily="Graduate">
            Frontend Engineer
          </Text>
        </Stack>
      </Center> */}
    </Box>
  );
};

export default Intro;
