import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import face from "tabler-icons/icons/face-id.svg";
import exit from "tabler-icons/icons/corner-down-left.svg";
import moon from "tabler-icons/icons/moon.svg";
import sun from "tabler-icons/icons/sun.svg";
import mail from "tabler-icons/icons/mail.svg";

import {
  Base,
  MenuDiv,
  Icon,
  Bar,
  Icons,
  ButtonOne,
  ButtonTwo,
  ButtonThree,
  Section,
  CoverOne,
  CoverTwo,
  Content,
  Top,
  Bottom
} from "./Menu.styled";

const Menu = ({ location, theme, toggleTheme }) => {
  const home = location.pathname === "/";
  const [close, setClose] = useState(false);
  return (
    <ThemeProvider theme={{ close: close }}>
      <Base>
        <MenuDiv onClick={() => setClose(!close)}>
          <Icon>
            <Bar />
          </Icon>
        </MenuDiv>
        <Icons>
          <ButtonOne src={home ? face : exit} alt="" />
          <ButtonTwo src={theme ? sun : moon} alt="" />
          <ButtonThree src={mail} alt="" />
        </Icons>
        <Section>
          <CoverOne>
            <CoverTwo>
              <Content
                onClick={() => {
                  toggleTheme(!theme);
                  localStorage.setItem("theme", theme);
                }}
              />
            </CoverTwo>
          </CoverOne>
          <Top to={home ? "/about" : "/"}></Top>
          <Bottom onClick={() => {}} />
        </Section>
      </Base>
    </ThemeProvider>
  );
};
export default withRouter(Menu);
