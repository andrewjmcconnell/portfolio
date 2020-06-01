import React from "react";

import { Wrapper, Title, Content } from "../Pages.styled";
import ContactWheel from "../../components/ContactWheel";

const Contact = () => (
  <Wrapper>
    <Title>Let's Build Something Together</Title>
    <Content flex={8}>
        <ContactWheel />
    </Content>
  </Wrapper>
);

export default Contact;
