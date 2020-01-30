import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import LandingPage from "./pages/LandingPage";

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin 0 auto;
`;
const Wrapper = styled.div`
  padding: 0 48px;
`;
const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  p {
    font-size: .75rem;
    letter-spacing: .3rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  h5 {
    margin-top: 260px;
    font-size: 1.8rem;
    font-weight: 600;
    padding-right: 360px;
  }
`;

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Wrapper>
          <Home>
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </Home>
        </Wrapper>
      </Container>
    </Router>
  );
}
export default App;
