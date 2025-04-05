import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/common/BackButton';
import StarryText from '../components/common/StarryText';
import { Experience } from '../components/sections/ExperienceComponents';

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

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

interface AboutMeProps {
  onBack: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onBack }) => {
  const inncirclesExperience = {
    company: "Inncircles Technologies Pvt. Ltd.",
    roles: [
      {
        title: "Technical Lead",
        period: "July 2024 - Present",
        responsibilities: [
          "Lead a team of 10 engineers",
          "Ensure smooth collaboration and task completion",
          "Take responsibility for deployments",
          "Manage end-to-end project execution",
          "Oversee code reviews and performance optimizations",
          "Coordinate with cross-functional teams",
          "Mentor junior developers"
        ]
      },
      {
        title: "Product Developer",
        period: "October 2021 - July 2024",
        responsibilities: [
          "Develop high-quality features",
          "Conduct task analysis",
          "Follow best coding practices",
          "Collaborate with cross-functional teams",
          "Optimize code for better performance, scalability, and maintainability"
        ]
      }
    ]
  };

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Header>
        <StarryText>About Me</StarryText>
      </Header>
      <Content>
        <Description>
          Vaishali Gangwar is a Technical Lead with approximately 3.5 years of experience in web development and project management, primarily at Inncircles Technologies Pvt. Ltd.
        </Description>
        <Experience {...inncirclesExperience} />
        <Description>
          Vaishali's experience demonstrates a strong track record of technical leadership and effective contributions to software development projects.
        </Description>
      </Content>
    </Container>
  );
};

export default AboutMe; 