import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/common/BackButton';
import StarryText from '../components/common/StarryText';

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
  width: 100%;
  height: calc(100vh - 25rem);
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: 2;
  padding: 0 1rem;
  gap: 1rem;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  position: relative;
  padding: 0 1rem;
  overflow: hidden;

  &:not(:last-child) {
    border-right: 2px solid rgba(255, 215, 0, 0.3);
  }
`;

const SectionTitle = styled.h2`
  color: #ffd700;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  position: sticky;
  top: 0;
  background: linear-gradient(to bottom, #0a0a2a 80%, transparent);
  padding: 0.5rem 0;
  z-index: 2;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding-right: 0.5rem;
  padding-bottom: 2rem;
  position: relative;
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 80%,
    transparent 100%
  );
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Item = styled.div`
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    color: #ffd700;
    border-color: rgba(255, 215, 0, 0.3);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

interface InterestsProps {
  onBack: () => void;
}

const Interests: React.FC<InterestsProps> = ({ onBack }) => {
  const technicalSkills = [
    'Full Stack Development (MEAN)',
    'Mobile Development (React Native)',
    'Database Management (MongoDB)',
    'Debugging and Troubleshooting',
    'AWS Cloud Services',
    'RESTful API Design',
    'CI/CD Implementation',
  ];

  const softSkills = [
    'Critical Thinking',
    'Communication Skills',
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Responsiveness',
    'Attention to Detail',
  ];

  const interests = [
    'Painting and Sketching',
    'Sports - Badminton, TT',
    'Managing Events',
    'Watching Anime',
  ];

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Header>
        <StarryText>Skills & Interests</StarryText>
      </Header>
      <Content>
        <Section>
          <SectionTitle>Technical Skills</SectionTitle>
          <ItemList>
            {technicalSkills.map((skill, index) => (
              <Item key={index}>{skill}</Item>
            ))}
          </ItemList>
        </Section>

        <Section>
          <SectionTitle>Soft Skills</SectionTitle>
          <ItemList>
            {softSkills.map((skill, index) => (
              <Item key={index}>{skill}</Item>
            ))}
          </ItemList>
        </Section>

        <Section>
          <SectionTitle>Interests</SectionTitle>
          <ItemList>
            {interests.map((interest, index) => (
              <Item key={index}>{interest}</Item>
            ))}
          </ItemList>
        </Section>
      </Content>
    </Container>
  );
};

export default Interests; 