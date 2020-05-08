import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Box, Center, Stack, Text } from "../../layouts";
import Accordion from "../../components/Accordion";
import Fireflies from "../../animations/Fireflies";

import content from "./Companies.content";

const Companies = ({ screen }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Box padding="14vh 10vw" minWidth="100%" minHeight="100%">
    {isDarkMode && <Fireflies top={screen} />}
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
              Places I've Worked
            </Text>
          </Center>
          <Center intrinsic>
            <Box padding="0 5vw">
              <Stack>
                <Accordion content={content} />
              </Stack>
            </Box>
          </Center>
        </Stack>
      </Center>
    </Box>
);}

export default Companies;
