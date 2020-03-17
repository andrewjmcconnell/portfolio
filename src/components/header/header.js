import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Menu = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
`;

const Header = ({ location }) => {
  const home = location.pathname === "/";
  return (
    <Menu>
      <Link to={home ? "/about" : "/"}>{home ? "About Me" : "Close"}</Link>
    </Menu>
  );
};
export default withRouter(Header);
