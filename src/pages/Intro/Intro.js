import React from "react";

import { Box, Center, Stack, Text } from "../../layouts";
import Header from "../../components/Header";

const Intro = () => {
  return (
    <Box padding="35vh 5vw" minWidth="100%" minHeight="100%">
      <Center intrinsic>
        <Stack childGap="50px">
          <Header>Andrew McConnell</Header>
          <Text fontSize="3vmax" textAlign="center" fontFamily="Graduate">
            Frontend Engineer
          </Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Intro;
