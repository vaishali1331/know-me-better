import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import StarsBackground from './components/StarsBackground';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    background-color: #0a0a2a;
    color: white;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #000000 0%,
    #0a0a2a 20%,
    #1a1a3a 40%,
    #2a2a4a 60%,
    #1a1a3a 80%,
    #0a0a2a 100%
  );
  position: relative;
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <StarsBackground />
      <Home />
    </AppContainer>
  );
};

export default App; 