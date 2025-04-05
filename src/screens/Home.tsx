import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AboutMe from '../screens/AboutMe';
import Experience from '../screens/Experience';
import Interests from '../screens/Interests';
import Projects from '../screens/Projects';
import Socials from '../screens/Socials';
import DirectionPole from '../components/home/DirectionPole';
import TextContainer from '../components/home/TextContainer';
import Lamp from '../components/home/Lamp';
import { ScreenContainer } from '../components/common/ScreenContainer';
import ThemeToggle from '../components/common/ThemeToggle';

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HomeContent = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

interface HomeProps {
  isDayTheme: boolean;
  onThemeToggle: () => void;
}

const Home: React.FC<HomeProps> = ({ isDayTheme, onThemeToggle }) => {
  const [isLampOn, setIsLampOn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);

  useEffect(() => {
    // Update the primary color based on theme
    document.documentElement.style.setProperty(
      '--primary-color',
      isDayTheme ? '#001d3d' : 'white'
    );
    // Update the secondary color based on theme
    document.documentElement.style.setProperty(
      '--secondary-color',
      isDayTheme ? '#001d3d' : '#aaa'
    );

    document.documentElement.style.setProperty(
      '--primary-bg-color',
      isDayTheme ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.08)'
    );
    document.documentElement.style.setProperty(
      '--secondary-bg-color',
      isDayTheme ? 'rgba(0, 15, 0, 0.05)' : 'rgba(255, 215, 0, 0.05)'
    );
  }, [isDayTheme]);

  const handleBulbClick = () => {
    setIsLampOn(prev => !prev);
  };

  const handleNavigate = (path: string) => {
    setCurrentScreen(path);
  };

  const handleBack = () => {
    setCurrentScreen(null);
  };

  const directions = [
    { text: 'About Me', angle: -45, path: 'about' },
    { text: 'Projects', angle: -15, path: 'projects' },
    { text: 'Experience', angle: 15, path: 'experience' },
    { text: 'Skills & Interests', angle: 45, path: 'interests' },
    { text: 'Socials', angle: 75, path: 'socials' }
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'about':
        return <AboutMe onBack={handleBack} />;
      case 'interests':
        return <Interests onBack={handleBack} />;
      case 'experience':
        return <Experience onBack={handleBack} />;
      case 'projects':
        return <Projects onBack={handleBack} />;
      case 'socials':
        return <Socials onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <HomeContainer>
      <AnimatePresence mode="wait">
        {!currentScreen ? (
          <HomeContent
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* <ThemeToggle isDayTheme={isDayTheme} onToggle={onThemeToggle} /> */}
            <Lamp
              isOn={isLampOn}
              onBulbClick={handleBulbClick}
              style={{ marginBottom: '-2rem' }}
            />
            <TextContainer isNeon={isLampOn} />
            <DirectionPole directions={directions} onNavigate={handleNavigate} />
          </HomeContent>
        ) : (
          <ScreenContainer
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {renderScreen()}
          </ScreenContainer>
        )}
      </AnimatePresence>
    </HomeContainer>
  );
};

export default Home; 