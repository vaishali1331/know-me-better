import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/common/BackButton';

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

const InterestList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const InterestItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

interface InterestsProps {
  onBack: () => void;
}

const Interests: React.FC<InterestsProps> = ({ onBack }) => {
  const interests = [
    'Web Development',
    'UI/UX Design',
    'Artificial Intelligence',
    'Photography',
    'Music',
    'Travel'
  ];

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Content>
        <Title>My Interests</Title>
        <InterestList>
          {interests.map((interest, index) => (
            <InterestItem key={index}>{interest}</InterestItem>
          ))}
        </InterestList>
      </Content>
    </Container>
  );
};

export default Interests; 