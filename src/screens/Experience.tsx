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
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffd700;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: #ffd700;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ffd700;
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffd700;
`;

const TimelineDate = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

const TimelineDescription = styled.p`
  margin-top: 0.5rem;
  line-height: 1.6;
`;

interface ExperienceProps {
  onBack: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ onBack }) => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      date: '2020 - Present',
      description: 'Leading development teams and implementing innovative solutions.'
    },
    {
      title: 'Software Engineer',
      company: 'Innovate Solutions',
      date: '2018 - 2020',
      description: 'Developed and maintained web applications using modern technologies.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      date: '2016 - 2018',
      description: 'Worked on frontend development and user interface design.'
    }
  ];

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Content>
        <Title>My Experience</Title>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineTitle>{exp.title}</TimelineTitle>
              <TimelineDate>{exp.company} • {exp.date}</TimelineDate>
              <TimelineDescription>{exp.description}</TimelineDescription>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </Container>
  );
};

export default Experience; 