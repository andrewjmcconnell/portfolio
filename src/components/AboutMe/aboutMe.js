import React, { useEffect, useRef, createRef, useState } from "react";
import gsap from "gsap";

import Boston from "../../img/boston.jpg";
import Evanston from "../../img/evanston.jpg";
import Chicago from "../../img/Chicago_Daytime.svg";

import {
  AboutMeMenu,
  MenuCityBackground,
  MenuSecondaryBackgroundColor,
  MenuLayer,
  MenuLinks,
  Location,
  Info,
  InfoWrapper,
  Content,
  CityImage
} from "./AboutMe.styled";
import { staggerReveal, fadeInUp, staggerText } from "./AboutMe.animations";

const AboutMe = ({ initial, clicked }) => {
  const cities = [
    { name: "Boston", image: Chicago },
    { name: "Evanston", image: Chicago },
    { name: "Chicago", image: Chicago }
  ];

  const [citySelected, setCitySelected] = useState(null);
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  const cityRefs = useRef([...Array(cities.length)].map(() => createRef()));
  let info = useRef(null);
  let cityImg = useRef(null);

  const showCityInfo = city => {
    switch (city) {
      case "Boston":
        return "I was born and raised just outside of Boston, Massachusetts. I went to high school at BB&N in Cambridge and blah blah blah blah blah.";
      case "Evanston":
        return "YOU'RE IN EVANSTON";
      case "Chicago":
        return "YOU'RE IN CHICAGO";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (!initial) {
      if (!clicked) {
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
  }, [initial, clicked]);

  const handleCityHover = (e, { name, image }, background, img) => {
    setCitySelected(name);
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut"
    });
    gsap.to(background, {
      duration: 0,
      background: `white`
    });
    gsap.to(background, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut"
    });
    gsap.to(img, {
      duration: 0,
      opacity: 1,
      background: `url(${image})`
    });
  };

  const handleCityHoverExit = (e, background, img) => {
    setCitySelected(null);
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut"
    });
    gsap.to(background, {
      duration: 0,
      skewY: 0
    });
    gsap.to(background, {
      duration: 0.4,
      opacity: 0,
      skewY: 0
    });
    gsap.to(img, {
      duration: 0,
      opacity: 0
    });
  };

  return (
      <AboutMeMenu ref={el => (menu = el)}>
        <MenuSecondaryBackgroundColor ref={el => (revealMenuBackground = el)} />
        <MenuLayer ref={el => (revealMenu = el)}>
          <MenuCityBackground
            ref={el => (cityBackground = el)}
          ></MenuCityBackground>
          <MenuLinks>
            {cities.map((city, i) => (
              <Location
                ref={el => (cityRefs.current[i] = el)}
                key={city.name}
                onMouseEnter={e =>
                  handleCityHover(e, city, cityBackground, cityImg)
                }
                onMouseOut={e =>
                  handleCityHoverExit(e, cityBackground, cityImg)
                }
              >
                {city.name}
              </Location>
            ))}
          </MenuLinks>
          <Content>
            <CityImage ref={el => (cityImg = el)} />
            <InfoWrapper>
              <Info ref={el => (info = el)}>{showCityInfo(citySelected)}</Info>
            </InfoWrapper>
          </Content>
        </MenuLayer>
      </AboutMeMenu>
  );
};

export default AboutMe;
