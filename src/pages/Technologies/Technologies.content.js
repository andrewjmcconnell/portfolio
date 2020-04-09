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

export const AppDevelopmentContent = [
  {
    img: ReactJs,
    alt: "ReactJs",
    tooltipContent:
      "I primarily use React.js for web development and React-Native for mobile development, at work and at home."
  },
  {
    img: Redux,
    alt: "Redux",
    tooltipContent: "I use Redux if state management is necessary and complex enough."
  },
  {
    img: NodeJs,
    alt: "NodeJs",
    tooltipContent:
      "For very simple backends and shell scripts that wouldn't work in bash, I use NodeJs (sometimes Python)."
  },
  {
    img: Swift,
    alt: "Swift",
    tooltipContent:
      "My first mobile experience came in native iOS development using Swift."
  },
  {
    img: Python,
    alt: "Python",
    tooltipContent:
      "In college I primarily used Python, especially for data analytics and machine learning."
  },
  {
    img: Nginx,
    alt: "NGINX",
    tooltipContent: "I use NGINX as a web server (including for this site)."
  }
];

export const SourceControlContent = [
  {
    img: Git,
    alt: "Git",
    tooltipContent: "I use Git CLI for basic source control."
  },
  {
    img: Github,
    alt: "Github",
    tooltipContent: "I use Github for repo management, running CI/CD, "
  },
  {
    img: Gitkraken,
    alt: "GitKraken",
    tooltipContent: "I use GitKraken as an easy GUI for git branch management."
  }
];

export const CICDContent = [
  {
    img: Jenkins,
    alt: "Jenkins",
    tooltipContent:
      "At work we use mostly use Jenkins for CI/CD, including building Quay images for deployment."
  },
  {
    img: CircleCI,
    alt: "CircleCI",
    tooltipContent:
      "Sometimes I use CircleCI to run some testing CI before building a git commit."
  },
  {
    img: Kubernetes,
    alt: "Kubernetes",
    tooltipContent:
      "At work we use Kubernetes for containerization and management of applications in different clusters and namespaces."
  },
  {
    img: Argo,
    alt: "Argo CD",
    tooltipContent: "We use Argo CD to manage deployment of Quay repos to Kubernetes."
  },
  {
    img: EC2,
    alt: "AWS EC2",
    tooltipContent:
      "I use AWS EC2 for virtual machine hosting, which is how this website is run."
  }
];
