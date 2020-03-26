import React from "react";
import styled from "styled-components";
import { Box, Center, Stack, Text } from "../../layouts";

import FloatingIcon from "../../components/FloatingIcon";

import ReactJs from "../../img/technologies/react.png";
import Redux from "../../img/technologies/redux.png";
import NodeJs from "../../img/technologies/node.png";
import Swift from "../../img/technologies/swift.png";
import Python from "../../img/technologies/python.png";
import Nginx from "../../img/technologies/nginx.png";

import Git from "../../img/technologies/git.png";
import Github from "../../img/technologies/github.png";
import Gitkraken from "../../img/technologies/gitkraken.png";

import Jenkins from "../../img/technologies/jenkins.png";
import CircleCI from "../../img/technologies/circleci.png";
import Kubernetes from "../../img/technologies/kubernetes.png";
import Argo from "../../img/technologies/argo.png";
import EC2 from "../../img/technologies/ec2.png";

const Icon = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppDevelopment = (
  <Row>
    <FloatingIcon>
      <Icon src={ReactJs} alt="React" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={Redux} alt="Redux" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={NodeJs} alt="Node" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={Swift} alt="Swift" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={Python} alt="Python" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={Nginx} alt="Nginx" />
    </FloatingIcon>
  </Row>
);

const SourceControl = (
  <Row>
    <FloatingIcon>
      <Icon src={Git} alt="Git" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={Github} alt="Github" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={Gitkraken} alt="Gitkraken" />
    </FloatingIcon>
  </Row>
);

const CICD = (
  <Row>
    <FloatingIcon>
      <Icon src={Jenkins} alt="Jenkins" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={CircleCI} alt="CircleCI" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={Kubernetes} alt="Kubernetes" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={Argo} alt="Argo" />
    </FloatingIcon>
    <FloatingIcon>
      <Icon src={EC2} alt="EC2" />
    </FloatingIcon>
  </Row>
);

const Technologies = () => {
  return (
    <Box padding="10vh 0" minWidth="100%" minHeight="100%">
      <Center intrinsic>
        <Stack childGap="50px">
          <Box
            background="grey"
            borderColor="black"
            borderRadius="4px"
            borderSize="1px"
            minWidth="60vw"
          >
            <Center intrinsic>
              <Text>Technologies I Work With</Text>
            </Center>
          </Box>
          <Center intrinsic>
            <Box padding="0 5vw">
              <Stack>
                <Center intrinsic>
                  <Text>Application Development</Text>
                  {AppDevelopment}
                </Center>
                <Center intrinsic>
                  <Text>Source Control</Text>
                  {SourceControl}
                </Center>
                <Center intrinsic>
                  <Text>CI/CD</Text>
                  {CICD}
                </Center>
              </Stack>
            </Box>
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};

export default Technologies;
