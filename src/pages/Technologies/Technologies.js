import React from "react";
import styled from "styled-components";
import { Box, Center, Stack, Text } from "../../layouts";

import FloatingIcon from "../../components/FloatingIcon";

import {
  AppDevelopmentContent,
  SourceControlContent,
  CICDContent
} from "./Technologies.content";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppDevelopment = (
  <Row>
    {AppDevelopmentContent.map(content => (
      <FloatingIcon src={content.img} tooltipContent={content.content} />
    ))}
  </Row>
);

const SourceControl = (
  <Row>
    {SourceControlContent.map(content => (
      <FloatingIcon src={content.img} tooltipContent={content.content} />
    ))}
  </Row>
);

const CICD = (
  <Row>
    {CICDContent.map(content => (
      <FloatingIcon src={content.img} tooltipContent={content.content} />
    ))}
  </Row>
);

const Technologies = () => {
  return (
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
              Technologies I Work With
            </Text>
          </Center>
          <Center intrinsic>
            <Box padding="0 5vw">
              <Stack>
                <Center intrinsic>{AppDevelopment}</Center>
                <Center intrinsic>{SourceControl}</Center>
                <Center intrinsic>{CICD}</Center>
              </Stack>
            </Box>
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};

export default Technologies;
