import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import AboutMe from "../AboutMe";

const Containter = styled.div`
  height: 100px;
`;

const InnerHeader = styled.div`
  position: relative;
  z-index: 10;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    menuName: "About Me"
  });
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    history.listen(() => setState({ clicked: false, menuName: "About Me" }));
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
        menuName: state.clicked ? "About Me" : "Close"
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
      <InnerHeader>
        <Menu>
          <button onClick={handleMenu} disabled={disabled}>
            {state.menuName}
          </button>
        </Menu>
      </InnerHeader>
      <AboutMe {...state} />
    </Containter>
  );
};
export default withRouter(Header);
