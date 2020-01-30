import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

import Hamburger from "../hamburger";

const Containter = styled.div`
  height: 100px;
`;

const Wrapper = styled.div``;

const InnerHeader = styled.div`
  position: relative;
  z-index: 10;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 700;
  text-decoration: none;
  color: black;
`;

const Menu = styled.div`
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    font-size: 0.8rem;
    color: black;
  }
`;

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: true,
    clicked: null,
    menuName: "Menu"
  });
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    history.listen(() => setState({ clicked: false, menuName: "Menu" }));
  });

  const handleMenu = () => {
    disableMenu();
    if (state.initial) {
      setState({
        initial: false,
        clicked: true,
        menuName: "Close"
      });
    } else {
      setState({
        initial: false,
        clicked: !state.clicked,
        menuName: state.clicked ? "Menu" : "Close"
      });
    }
  };
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };
  return (
    <Containter>
      <Wrapper>
        <InnerHeader>
          <Logo>
            <Link to="/">Home</Link>
          </Logo>
          <Menu>
            <button onClick={handleMenu} disabled={disabled}>
              {state.menuName}
            </button>
          </Menu>
        </InnerHeader>
      </Wrapper>
      <Hamburger state={state} />
    </Containter>
  );
};
export default withRouter(Header);
