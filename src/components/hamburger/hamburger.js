import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";

import Boston from "../../img/boston.jpg";
import Evanston from "../../img/evanston.jpg";
import Chicago from "../../img/chicago.jpg";

const HamburgerMenu = styled.div`
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%
    width: 100%;
`;

const MenuSecondaryBackgroundColor = styled.div`
    background-color: black;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%
    width: 100%;
`;

const MenuLayer = styled.div`
  position: relative;
  background-color: red;
  height: 100%;
  overflow: hidden;
`;

const cameraPan = keyframes`
    0% {
        background-position: 0% 0%;
    }
    25% {
        background-position: 40% 10%;
    }
    50% {
        background-position: 0% 10%;
    }
    75% {
        background-position: 10% 40%;
    }
    100% {
        background-position: 0% 0%;
    }
`;

const MenuCityBackground = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${cameraPan} 30s infinite;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  position: relative;
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 200px;
  nav {
    display: block;
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        font-size: 6rem;
        font-weight: 700;
        cursor: pointer;
        height: 135px;
        overflow: hidden;
        position: relative;
        width: 700px;
        a {
          position: absolute;
          color: white;
          text-decoration: none;
          &:hover {
            color: black;
          }
        }
      }
    }
  }
`;

const Info = styled.div`
  color: white;
  width: 300px;
  h3 {
    font-size: 1.2rem;
    margin: 8px auto;
  }
  p {
    margin: 0 auto;
    font-size: 0.8rem;
  }
`;

const Locations = styled.div`
  position: absolute;
  bottom: -80px;
  color: white;
  margin-top: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  span {
    &:first-child {
      margin-left: 64px;
    }
    font-weight: 400;
    cursor: pointer;
    margin: 0 32px;
    transition: 0.3s ease-in-out;
    &:hover {
      background: black;
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
`;

const Hamburger = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const cities = [
    { name: "Boston", image: Boston },
    { name: "Evanston", image: Boston },
    { name: "Chicago", image: Boston }
  ];

  useEffect(() => {
    console.log("1");
    if (!state.initial) {
      if (!state.clicked) {
        console.log("2");
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
        staggerText(line1, line2, line3);
      }
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1
      }
    });
  };

  const fadeInUp = node => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut"
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3
      }
    });
  };

  const handleCity = (city, target) => {
    gsap.to(target, {
      duration: 0,
      background: `url(${city}) center center`
    });
    gsap.to(target, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut"
    });
    gsap.from(target, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top"
    });
  };

  const handleCityReturn = target => {
    gsap.to(target, {
      duration: 0,
      skewY: 0
    });
    gsap.to(target, {
      duration: 0.4,
      opacity: 0,
      skewY: 0
    });
  };

  const handleHover = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut"
    });
  };

  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut"
    });
  };

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
              <nav>
                <ul>
                  <li>
                    <Link
                      to="/option1"
                      ref={el => (line1 = el)}
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                    >
                      Option 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/option2"
                      ref={el => (line2 = el)}
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                    >
                      Option 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/option3"
                      ref={el => (line3 = el)}
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                    >
                      Option 3
                    </Link>
                  </li>
                </ul>
              </nav>
              <Info ref={el => (info = el)}>
                <h3>Our Promise</h3>
                <p>lalalalalalallalala</p>
              </Info>
              <Locations>
                Locations:
                {cities.map(city => (
                  <span
                    key={city.name}
                    onMouseEnter={() => handleCity(city.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}
                  >
                    {city.name}
                  </span>
                ))}
              </Locations>
            </MenuLinks>
          </Wrapper>
        </Container>
      </MenuLayer>
    </HamburgerMenu>
  );
};

export default Hamburger;
