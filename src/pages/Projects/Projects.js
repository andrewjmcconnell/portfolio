import React from "react";

import { Box, Center, Stack, Text } from "../../layouts";
import Paginator from "../../components/Paginator";

const Projects = () => (
  <Box padding="14vh 10vw" minWidth="100%" minHeight="100%">
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
          <Box padding="0 5vw">
            <Stack direction="row">
              {/* <Paginator /> */}
            </Stack>
          </Box>
        </Center>
      </Stack>
    </Center>
  </Box>
);

export default Projects;
