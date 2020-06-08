import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRemoveFormat,
  faCalculator,
  faFile
} from "@fortawesome/free-solid-svg-icons";

const Img = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  font-size: 2.5vmax;
  color: ${({ theme }) => theme.colors.background};
`;

export default [
  {
    id: "formatted-input",
    title: "Formatted Input",
    description: `Formatted Input is an open source project which
    enables the developer to design a set of cosmetic formats for user
    input. These formats are unrestricted and easy to use, and allow the
    user to create an input which can format anything. This will only affect what is displayed in the input, while
    the component maintains the user's input under the hood.`,
    icon: <Img icon={faRemoveFormat} />,
    link: "https://www.npmjs.com/package/formatted-input",
    linkTitle: "NPM"
  },
  {
    id: "rulp",
    title: "Rulp (Rust Linear Programming)",
    description: `Rulp is an open source Rust library hosted on Cargo intending to
    simplify the representation and solution of linear programming problems.`,
    icon: <Img icon={faCalculator} />,
    link: "https://crates.io/crates/rulp",
    linkTitle: "Crates"
  },
  {
    id: "portfolio",
    title: "This Website",
    description: `This website was built completely from scratch using minimal 3rd-party libraries. All animations are pure CSS.
    The site is hosted on Amazon EC2 with pm2 running the application. Graphics were created or modified on Vecteezy,
    and icons are from tabler-icons or font awesome.`,
    icon: <Img icon={faFile} />,
    link: "https://github.com/andrewjmcconnell/portfolio",
    linkTitle: "Github"
  }
];
