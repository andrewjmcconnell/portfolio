import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Box, Center, Stack, Text } from "../../layouts";
import Header from "../../components/Header";
import Astronaut from "../../img/astronaut.svg";

const Intro = () => {
  const { isMobile } = useContext(ThemeContext);
  return (
    <Box padding="35vh 5vw" minWidth="100%" minHeight="100%">
      <Center intrinsic>
        <Stack childGap="50px">
          <Header>Andrew McConnell</Header>
          <Text
            fontSize="30px"
            textAlign="center"
            fontFamily="Graduate"
          >
            Frontend Engineer
          </Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Intro;
