import React, { useState, useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import AboutMe from "../AboutMe";

const Menu = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  color: white;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
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
    <Fragment>
      <Menu onClick={handleMenu} disabled={disabled}>
        {state.menuName}
      </Menu>
      <AboutMe {...state} />
    </Fragment>
  );
};
export default withRouter(Header);
