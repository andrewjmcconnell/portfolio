import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import LandingPage from "./pages/LandingPage";

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
`

const AppContainer = styled.div`
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  height: 100vh;
  width: 100vw;
`;


function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </AppContainer>
    </Router>
  );
}
export default App;
