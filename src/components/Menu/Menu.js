import React, { useState, useEffect } from "react";
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

// import {
//   MobileContainer,
//   MobileIcon,
//   MobileBar,
//   DropdownBar,
//   MobileButtonLink,
//   MobileButton,
//   MobileImg
// } from "./Menu.mobile.styled";

const Menu = ({ location, theme, toggleTheme }) => {
  const home = location.pathname === "/";
  const [close, setClose] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > newScrollPos);
      if (prevScrollPos <= newScrollPos) {
        setClose(false);
      }
      setPrevScrollPos(newScrollPos);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const DesktopMenu = (
    <Base visible={visible}>
      <MenuDiv onClick={() => setClose(!close)} role="navigation">
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
            >
              {!!theme ? "Light Mode" : "Night Mode"}
            </Content>
          </CoverTwo>
        </CoverOne>
        <Top to={home ? "/about" : "/"}>About Me</Top>
        <Bottom
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth"
            })
          }
        >
          Contact Me
        </Bottom>
      </Section>
    </Base>
  );

  // const MobileMenu = (
  //   <MobileContainer>
  //     <MobileIcon onClick={() => setClose(!close)}>
  //       <MobileBar />
  //     </MobileIcon>
  //     <DropdownBar>
  //       <MobileButtonLink to={home ? "/about" : "/"}>
  //         <MobileImg src={home ? face : exit} alt="" />
  //       </MobileButtonLink>
  //       <MobileButton
  //         onClick={() => {
  //           toggleTheme(!theme);
  //           localStorage.setItem("theme", theme);
  //         }}
  //       >
  //         <MobileImg src={theme ? sun : moon} alt="" />
  //       </MobileButton>
  //       <MobileButton onClick={() => {}}>
  //         <MobileImg src={mail} alt="" />
  //       </MobileButton>
  //     </DropdownBar>
  //   </MobileContainer>
  // );

  return (
    <ThemeProvider theme={{ close: close }}>
      {/* {isMobile ? MobileMenu : DesktopMenu} */}
      {DesktopMenu}
    </ThemeProvider>
  );
};
export default withRouter(Menu);
