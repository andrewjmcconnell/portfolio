import React from "react";

import { Box, Center, Stack, Text } from "../../layouts";
import Accordion from "../../components/Accordion";

import Citybase from "../../img/companies/citybase.png";
import Optum from "../../img/companies/optum.png";
import Nielsen from "../../img/companies/nielsen.png";

const content = [
  {
    img: Nielsen
  },
  {
    img: Optum
  },
  {
    img: Citybase
  }
];

const Companies = () => {
  return (
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
  );
};

export default Companies;
