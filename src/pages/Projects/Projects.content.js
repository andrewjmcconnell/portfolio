import React, { useState } from "react";
import styled from "styled-components";

import { FormattedInput, createFormat } from "formatted-input";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.onBackground};
`;

const Link = styled.a``;

const FormattedInputDemo = () => {
  const [value, setValue] = useState("");

  const formats = [
    "",
    "$0.0_",
    "$0.__",
    "$_.__",
    "$__.__",
    "$___.__",
    "$_,___.__",
    "$__,___.__",
    "$___,___.__",
    "$_,___,___.__",
    "$__,___,___.__",
    "$___,___,___.__"
  ];

  return (
    <Content>
      <Text>Formatted Input</Text>
      <Text>
        Formatted Input is an open source React component hosted on NPM which
        enables the developer to design a set of cosmetic formats for user
        input. These formats are unrestricted and easy to use, and allow the
        user to create an input which can format anything from currency to phone
        numbers to credit card numbers.
      </Text>
      <Text>
        The formatting will only affect what is displayed in the input, while
        the component maintains the user's input under the hood. See below for
        example.
      </Text>
      <FormattedInput
        value={value}
        formatter={createFormat(formats, "_")}
        onChange={rawValue => setValue(rawValue)}
      />
      <Text>Value: {value}</Text>

      <Link href="https://examples.amcconnell.now.sh/">Try it yourself!</Link>
      <Link href="https://github.com/CityBaseInc/formatted-input">Github</Link>
      <Link href="https://www.npmjs.com/package/formatted-input">NPM</Link>
    </Content>
  );
};

const RulpDemo = () => {
  return (
    <Content>
      <Text>Rulp (Rust Linear Programming)</Text>
      <Text>
        Rulp is an open source Rust library hosted on Cargo intending to
        simplify the representation and solution of linear programming problems.
      </Text>
      <Link href="https://github.com/feelmyears/rulp">Github</Link>
      <Link href="https://crates.io/crates/rulp">Cargo</Link>
    </Content>
  );
};

export default [
  {
    id: "formatted-input",
    renderContent: <FormattedInputDemo />
  },
  {
    id: "rulp",
    renderContent: <RulpDemo />
  },
  {
    id: "whysit",
    renderContent: <FormattedInputDemo />
  }
];
