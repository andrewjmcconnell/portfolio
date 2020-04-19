import React, { useState } from "react";
import styled from "styled-components";

import { FormattedInput, createFormat } from "formatted-input";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.onBackground};
`;

const FormattedInputDemo = () => {
  const [value, setValue] = useState("");

  const formats = [
    "",
    "x",
    "xx/",
    "xx/x",
    "xx/xx/",
    "xx/xx/x",
    "xx/xx/xx",
    "xx/xx/xxx",
    "xx/xx/xxxx"
  ];

  return (
    <Content>
      <Text>TEST!</Text>
      <FormattedInput
        value={value}
        formatter={createFormat(formats, "x")}
        onChange={rawValue => setValue(rawValue)}
      />
      <Text>Value: {value}</Text>
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
    renderContent: <FormattedInputDemo />
  },
  {
    id: "page3",
    renderContent: <FormattedInputDemo />
  }
];
