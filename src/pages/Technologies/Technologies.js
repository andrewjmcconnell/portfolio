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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppDevelopmentContent = [
  {
    img: ReactJs,
    content:
      "I primarily use React.js for web development and React-Native for mobile development, at work and at home."
  },
  {
    img: Redux,
    content: "I use Redux if state management is necessary and complex enough."
  },
  {
    img: NodeJs,
    content: "For very simple backends and shell scripts that wouldn't work in bash, I use NodeJs (sometimes Python)."
  },
  {
    img: Swift,
    content: "My first mobile experience came in native iOS development using Swift."
  },
  {
    img: Python,
    content: "In college I primarily used Python, especially for data analytics and machine learning."
  },
  {
    img: Nginx,
    content: "I use NGINX as a web server (including for this site)."
  }
];

const SourceControlContent = [
  {
    img: Git,
    content: "I use Git CLI for basic source control."
  },
  {
    img: Github,
    content: "I use Github for repo management, running CI/CD, "
  },
  {
    img: Gitkraken,
    content: "I use GitKraken as an easy GUI for git branch management."
  }
];

const CICDContent = [
  {
    img: Jenkins,
    content: "At work we use mostly use Jenkins for CI/CD, including building Quay images for deployment."
  },
  {
    img: CircleCI,
    content: "Sometimes I use CircleCI to run some testing CI before building a git commit."
  },
  {
    img: Kubernetes,
    content: "At work we use Kubernetes for containerization and management of applications in different clusters and namespaces."
  },
  {
    img: Argo,
    content: "We use Argo CD to manage deployment of Quay repos to Kubernetes."
  },
  {
    img: EC2,
    content: "I use AWS EC2 for virtual machine hosting, which is how this website is run."
  }
];

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
