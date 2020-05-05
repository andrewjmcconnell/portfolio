import React, { useState } from "react";
import styled from "styled-components";

import { FormattedInput, createFormat } from "formatted-input";

import simplexMethod from "../../img/projects/simplex_method.png";
import rulpDescription from "../../img/projects/rulp_description.png";

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

const Img = styled.img`
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
`;

const FormattedInputDemo = () => {
  const [moneyValue, setMoneyValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const moneyFormats = [
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

  const dateFormats = [
    "",
    "_",
    "__",
    "__/_",
    "__/__",
    "__/__/_",
    "__/__/__",
    "__/__/___",
    "__/__/____"
  ];

  const phoneFormats = [
    "",
    "+_",
    "+_ (_)",
    "+_ (__)",
    "+_ (___) ",
    "+_ (___) _",
    "+_ (___) __",
    "+_ (___) ___ - ",
    "+_ (___) ___ - _",
    "+_ (___) ___ - __",
    "+_ (___) ___ - ___",
    "+_ (___) ___ - ____",
    "+__ (___) ___ - ____",
    "+___ (___) ___ - ____"
  ];

  return (
    <Content>
      <Text>Currency</Text>
      <FormattedInput
        value={moneyValue}
        formatter={createFormat(moneyFormats, "_")}
        onChange={rawValue => setMoneyValue(rawValue)}
        aria-label="moneyDemo"
      />
      <Text>Value: {moneyValue}</Text>
      <Text>Dates</Text>
      <FormattedInput
        value={dateValue}
        formatter={createFormat(dateFormats, "_")}
        onChange={rawValue => setDateValue(rawValue)}
        aria-label="datesDemo"
      />
      <Text>Value: {dateValue}</Text>
      <Text>Phone Numbers</Text>
      <FormattedInput
        value={phoneValue}
        formatter={createFormat(phoneFormats, "_")}
        onChange={rawValue => setPhoneValue(rawValue)}
        aria-label="phoneDemo"
      />
      <Text>Value: {phoneValue}</Text>
    </Content>
  );
};

const RulpDemo = () => {
  return (
    <Content>
      <Img src={simplexMethod} alt="simplex_method" height="50%" width="50%" />
      <Img
        src={rulpDescription}
        alt="rulp_description"
        height="100%"
        width="100%"
      />
    </Content>
  );
};

export default [
  {
    id: "formatted-input",
    title: "Formatted Input",
    description: `Formatted Input is an open source project which
    enables the developer to design a set of cosmetic formats for user
    input. These formats are unrestricted and easy to use, and allow the
    user to create an input which can format anything. This will only affect what is displayed in the input, while
    the component maintains the user's input under the hood.`,
    content: <FormattedInputDemo />,
    link: "https://www.npmjs.com/package/formatted-input"
  },
  {
    id: "rulp",
    title: "Rulp (Rust Linear Programming)",
    description: `Rulp is an open source Rust library hosted on Cargo intending to
    simplify the representation and solution of linear programming problems.`,
    content: <RulpDemo />,
    link: "https://crates.io/crates/rulp"
  },
  {
    id: "thirdproject",
    title: "Third Project",
    description: `Third project coming soon...`,
    content: null,
    link: null
  }
];
