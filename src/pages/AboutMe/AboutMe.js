import React from "react";
import { withTheme } from "styled-components";

import Boston from "../../img/boston.png";
import Northwestern from "../../img/northwestern.png";
import Chicago from "../../img/chicago.png";

import { Box, Stack, Center } from "../../layouts";
import HiddenCard from "../../components/HiddenCard";

const cities = [
  {
    name: "Boston",
    image: Boston,
    text:
      "I was born and raised just outside of Boston, Massachusetts. I went to high school at BB&N in Cambridge and blah blah blah blah blah."
  },
  { name: "Evanston", image: Northwestern, text: "YOU'RE IN EVANSTON" },
  { name: "Chicago", image: Chicago, text: "YOU'RE IN CHICAGO" }
];

const AboutMe = ({ theme }) => (
  <Box
    padding={theme.isMobile ? "50px 15vw" : "25vh 15vw"}
    background="#0099ff"
    minHeight="100vh"
    minWidth="100vw"
    extraStyles={`transition: background-color 0.5s ease;`}
  >
    <Center intrinsic>
      <Box>
        <Stack direction={theme.isMobile ? "column" : "row"} childGap="3rem">
          {cities.map((city, i) => (
            <HiddenCard
              key={city.name}
              icon={city.image}
              title={city.name}
              description={city.text}
            />
          ))}
        </Stack>
      </Box>
    </Center>
  </Box>
);

export default withTheme(AboutMe);
