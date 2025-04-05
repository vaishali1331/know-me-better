import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './screens/Home';
import StarsBackground from './components/common/StarsBackground';
import CloudsBackground from './components/common/CloudsBackground';
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
  position: relative;
  overflow: hidden;
`;

const App: React.FC = () => {
  const [isDayTheme, setIsDayTheme] = useState(false);

  return (
    <AppContainer>
      <GlobalStyle />
      {isDayTheme ? <CloudsBackground /> : <StarsBackground />}
      <Home isDayTheme={isDayTheme} onThemeToggle={() => setIsDayTheme(prev => !prev)} />
    </AppContainer>
  );
};

export default App; 