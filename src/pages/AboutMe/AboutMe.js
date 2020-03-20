import React, { useState, useContext, Fragment } from "react";
import styled, { ThemeContext } from "styled-components";

import BackgroundImg from "../../components/BackgroundImg";

import Chicago from "../../img/Chicago_Daytime.svg";

import { Box, Stack, Center, Text } from "../../layouts";

const CityName = styled.div`
  width: 100%;
  height: ${({ open }) => (open ? "fit-content" : "10px")};
  transition: height 1s ease;
`;

const AboutMe = () => {
  const cities = [
    {
      name: "Boston",
      image: Chicago,
      text:
        "I was born and raised just outside of Boston, Massachusetts. I went to high school at BB&N in Cambridge and blah blah blah blah blah."
    },
    { name: "Evanston", image: Chicago, text: "YOU'RE IN EVANSTON" },
    { name: "Chicago", image: Chicago, text: "YOU'RE IN CHICAGO" }
  ];

  const [displayCity, showCity] = useState(null);

  const { isMobile } = useContext(ThemeContext);
  return (
    <Fragment>
      <BackgroundImg
        src={Chicago}
        animate={!!displayCity}
        isMobile={isMobile}
      />
      <Box
        padding={isMobile ? "30vh 0" : "40vh 0"}
        background={displayCity ? "transparent" : "#0099ff"}
        minHeight="100vh"
        minWidth="100vw"
        extraStyles={`transition: background-color 0.5s ease;`}
      >
        <Center intrinsic>
          <Box>
            <Stack childGap="50px">
              {cities.map((city, i) => (
                <Box
                  key={city.name}
                  width="100%"
                  onMouseEnter={() => showCity(city)}
                  onMouseLeave={() => showCity(null)}
                >
                  <Center intrinsic>
                    <Text>{city.name}</Text>
                  </Center>
                </Box>
              ))}
            </Stack>
          </Box>
        </Center>
      </Box>
    </Fragment>
  );
};

export default AboutMe;
