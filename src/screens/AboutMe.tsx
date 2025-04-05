import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/common/BackButton';
import StarryText from '../components/common/StarryText';
import HighlightedText from '../components/common/HighlightedText';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
  padding-top: 4rem;
`;

const Header = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
  z-index: 2;
  margin-top: 4rem;
`;

const Content = styled.div`
  max-width: 50rem;
  max-height: calc(80vh - 15rem); /* Subtract header height */
  padding: 2rem 2rem 2rem;
  text-align: left;
  z-index: 2;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  /* Add subtle gradients at both top and bottom to indicate scroll */
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 80%,
    transparent 100%
  );
`;

const StyledHighlightedText = styled(HighlightedText)`
  margin-bottom: 1.5rem;
`;

interface AboutMeProps {
  onBack: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onBack }) => {
  const highlightedText = {
    text: "A Technical Lead with over three years of experience in web development & project management, specialising in solving complex technical challenges with cutting-edge technologies and industry best practices. Skilled at analysing multiple solutions to a problem and identifying the most efficient approach. Known for a hands-on approach, providing technical expertise, strategic guidance & leadership to drive successful project delivery while ensuring high-quality standards and performance optimisation.",
    highlights: [
      "Technical Lead",
      "web development",
      "project management",
      "technical challenges",
      "cutting-edge technologies",
      "best practices",
      "technical expertise",
      "strategic guidance",
      "leadership",
      "performance optimisation"
    ]
  };

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Header>
        <StarryText>About Me</StarryText>
      </Header>
      <Content>
        <StyledHighlightedText
          text={highlightedText.text}
          highlights={highlightedText.highlights}
        />
      </Content>
    </Container>
  );
};

export default AboutMe; 