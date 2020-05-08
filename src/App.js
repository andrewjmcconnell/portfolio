import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import withWindowSize from "./utils/withWindowResize";
import { Box } from "./layouts";

import light from "./themes/light";
import dark from "./themes/dark";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // overflow: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const stored = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <Box minWidth="100%" minHeight="100%" padding="0">
          <Menu theme={isDarkMode} toggleTheme={setIsDarkMode} />
          <Switch>
            <Route exact path="/" component={LandingPage} role="main" />
            <Route exact path="/about" component={AboutMe} role="main" />
          </Switch>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
export default withWindowSize(App);
