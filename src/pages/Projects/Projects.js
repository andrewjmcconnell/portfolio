import React from "react";

import content from "./Projects.content";

import { Box, Center, Stack, Text } from "../../layouts";
import Carousel from "../../components/Carousel";

const Projects = () => (
  <Box padding="14vh 0" minWidth="100%" minHeight="100%">
    <Center intrinsic>
      <Stack childGap="3vh">
        <Center intrinsic>
          <Text
            fontSize="5vmax"
            lineHeight="5vmax"
            fontWeight="bold"
            fontFamily="Graduate"
            textAlign="center"
            extraStyles="background-clip: text;"
          >
            Projects I've Developed
          </Text>
        </Center>
        <Center intrinsic>
          <Carousel content={content} />
        </Center>
      </Stack>
    </Center>
  </Box>
);

export default Projects;
