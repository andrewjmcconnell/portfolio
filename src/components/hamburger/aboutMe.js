import React, { useEffect, useRef, createRef } from "react";
import gsap from "gsap";

import Boston from "../../img/boston.jpg";
import Evanston from "../../img/evanston.jpg";
import Chicago from "../../img/chicago.jpg";

import {
  HamburgerMenu,
  MenuCityBackground,
  MenuSecondaryBackgroundColor,
  MenuLayer,
  Container,
  Wrapper,
  MenuLinks,
  Location,
  Info
} from "./aboutMe.styled";
import {
  staggerReveal,
  fadeInUp,
  staggerText,
  handleCityHover,
  handleCityHoverExit
} from "../AboutMe/aboutMe.animations";

const Hamburger = ({ state }) => {
  const cities = [
    { name: "Boston", image: Boston },
    { name: "Evanston", image: Boston },
    { name: "Chicago", image: Boston }
  ];

  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  const cityRefs = useRef([...Array(cities.length)].map(() => createRef()));
  let info = useRef(null);

  useEffect(() => {
    if (!state.initial) {
      if (!state.clicked) {
        gsap.to([revealMenu, revealMenuBackground], {
          duration: 0.8,
          height: 0,
          ease: "power3.inOut",
          stagger: {
            amount: 0.07
          }
        });
        gsap.to(menu, {
          duration: 1,
          css: { display: "none" }
        });
      } else {
        gsap.to(menu, {
          duration: 0,
          css: { display: "block" }
        });
        gsap.to([revealMenu, revealMenuBackground], {
          duration: 0,
          opacity: 1,
          height: "100%"
        });
        staggerReveal(revealMenuBackground, revealMenu);
        fadeInUp(info);
        staggerText(...cityRefs.current);
      }
    }
  }, [state]);

  return (
    <HamburgerMenu ref={el => (menu = el)}>
      <MenuSecondaryBackgroundColor
        ref={el => (revealMenuBackground = el)}
      ></MenuSecondaryBackgroundColor>
      <MenuLayer ref={el => (revealMenu = el)}>
        <MenuCityBackground
          ref={el => (cityBackground = el)}
        ></MenuCityBackground>
        <Container>
          <Wrapper>
            <MenuLinks>
              {cities.map((city, i) => (
                <Location
                  ref={el => (cityRefs.current[i] = el)}
                  key={city.name}
                  onMouseEnter={e =>
                    handleCityHover(e, city.image, cityBackground)
                  }
                  onMouseOut={e => handleCityHoverExit(e, cityBackground)}
                >
                  {city.name}
                </Location>
              ))}
              <Info ref={el => (info = el)}>
                <h3>Our Promise</h3>
                <p>lalalalalalallalala</p>
              </Info>
            </MenuLinks>
          </Wrapper>
        </Container>
      </MenuLayer>
    </HamburgerMenu>
  );
};

export default Hamburger;
