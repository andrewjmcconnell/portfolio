import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import withWindowSize from "./utils/withWindowResize";
import { Box } from "./layouts";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Box minWidth="100%" minHeight="100%" padding="0">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutMe} />
        </Switch>
      </Box>
    </Router>
  );
}
export default withWindowSize(App);
