import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import withWindowSize from "./utils/withWindowResize";

import light from "./themes/light";
import dark from "./themes/dark";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    // backface-visibility: hidden;
    // perspective: 1000;
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
        <Menu theme={isDarkMode} toggleTheme={setIsDarkMode} />
        <Switch>
          <Route exact path="/" component={LandingPage} role="main" />
          <Route exact path="/about" component={AboutMe} role="main" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
export default withWindowSize(App);
