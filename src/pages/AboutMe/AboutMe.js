import React, { useState, useContext, Fragment } from "react";
import styled, { ThemeContext } from "styled-components";
import { Background } from "./AboutMe.styled";

import Boston from "../../img/boston.jpg";
import Evanston from "../../img/evanston.jpg";
import Chicago from "../../img/Chicago_Daytime.svg";

import { Box, Stack, Center } from "../../layouts";

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
  console.log(isMobile);
  return (
    <Fragment>
      <Background src={Chicago} animate={!!displayCity} isMobile={isMobile} />
      <Box
        padding="50vh 20vw"
        background={displayCity ? "transparent" : "red"}
        minHeight="100vh"
        minWidth="100vw"
        extraStyles={`transition: background-color 0.5s ease;`}
      >
        {isMobile ? (
          <Stack>
            {cities.map((city, i) => (
              <Center key={city.name}>
                <CityName
                  open={displayCity && displayCity.name === city.name}
                  onMouseEnter={() => showCity(city)}
                  onMouseLeave={() => showCity(null)}
                >
                  <Stack>
                    <Center>{city.name}</Center>
                    {displayCity && displayCity.name === city.name && (
                      <Center>{displayCity.text}</Center>
                    )}
                  </Stack>
                </CityName>
              </Center>
            ))}
          </Stack>
        ) : (
          <Stack direction="row" fullHeight>
            <Box width="50%" minHeight="100%">
              <Stack>
                {cities.map((city, i) => (
                  <Box
                    key={city.name}
                    width="100%"
                    onMouseEnter={() => showCity(city)}
                    onMouseLeave={() => showCity(null)}
                  >
                    {city.name}
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box width="50%" minHeight="100%">
              {!!displayCity && displayCity.text}
            </Box>
          </Stack>
        )}
      </Box>
    </Fragment>
  );
};

export default AboutMe;
