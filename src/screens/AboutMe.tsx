import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
`;

const Content = styled.div`
  max-width: 800px;
  padding: 2rem;
  text-align: center;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffd700;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

interface AboutMeProps {
  onBack: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onBack }) => {
  return (
    <Container>
      <BackButton onBack={onBack} />
      <Content>
        <Title>About Me</Title>
        <Description>
          I am a passionate developer with a keen interest in creating beautiful and functional web applications.
          My journey in technology has been driven by curiosity and a desire to solve complex problems.
        </Description>
      </Content>
    </Container>
  );
};

export default AboutMe; 