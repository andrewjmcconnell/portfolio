import React from "react";
import styled from "styled-components";

import LandingPage from "./pages/LandingPage";

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function App() {
  return (
    <AppContainer>
      <LandingPage />
    </AppContainer>
  );
}
export default App;
