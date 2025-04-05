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
  width: 100%;
  max-height: calc(80vh - 15rem);
  padding: 2rem 2rem 2rem;
  text-align: left;
  z-index: 2;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 80%,
    transparent 100%
  );
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, 
      transparent 0%,
      #ffd700 20%,
      #ffd700 80%,
      transparent 100%
    );
    transform: translateX(-1px);
  }
`;

const TimelineItem = styled.div<{ $isLast?: boolean }>`
  position: relative;
  width: 40%;
  padding: 2rem;
  box-sizing: border-box;
  cursor: pointer;
  
  &:nth-child(odd) {
    margin-left: 50%;
    padding-left: 2rem;
    
    &:before {
      content: '';
      position: absolute;
      left: -2rem;
      top: 50%;
      width: 2rem;
      height: 2px;
      background: var(--accent-color);
      transform: translateY(-50%);
    }
  }
  
  &:nth-child(even) {
    margin-left: 10%;
    padding-right: 2rem;
    text-align: right;
    
    &:before {
      content: '';
      position: absolute;
      right: -2rem;
      top: 50%;
      width: 2rem;
      height: 2px;
      background: var(--accent-color);
      transform: translateY(-50%);
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent-color);
    box-shadow: 0 0 10px var(--accent-color);
    ${props => props.$isLast ? 'animation: pulse 2s infinite;' : ''}
  }
  
  &:nth-child(odd):after {
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &:nth-child(even):after {
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
    }
  }
`;

const TimelineContent = styled.div`
  background: var(--primary-bg-color);
  padding: 1.5rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
`;

const CompanyName = styled.span`
  font-size: 1rem;
  color: var(--primary-color);
  display: block;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TimelineDate = styled.span`
  font-size: 0.9rem;
  color: var(--secondary-color);
  display: block;
`;

const TimelineDescription = styled.div<{ $isOdd: boolean }>`
  position: absolute;
  top: 0;
  ${props => props.$isOdd ? 'right: -100%;' : 'left: -100%;'}
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border-radius: 12px;
  overflow-y: auto;
  
  ${TimelineContent}:hover & {
    ${props => props.$isOdd ? 'right: 0;' : 'left: 0;'}
  }
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 3px;
  }
`;

const StyledHighlightedText = styled(HighlightedText)`
  font-size: 0.9rem;
  line-height: 1.5;
`;

interface ExperienceProps {
  onBack: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ onBack }) => {
  const experiences = [
    {
      title: 'Technical Lead',
      company: 'Inncircles Technologies Pvt. Ltd.',
      date: 'July 2024 - Present',
      description: {
        text: 'Led a team of 10 engineers, ensuring smooth collaboration and task completion within deadlines. Took full responsibility for deployments, ensuring seamless releases with minimal downtime. Managed end-to-end project execution, from requirement analysis to final delivery. Oversaw code reviews, performance optimizations, and best practices implementation. Coordinated with cross-functional teams to align technical solutions with business goals. Mentored junior developers, fostering skill development and team growth. Identified and resolved critical technical challenges to maintain system stability.',
        highlights: [
          'team of 10 engineers',
          'smooth collaboration',
          'deployments',
          'seamless releases',
          'project execution',
          'requirement analysis',
          'code reviews',
          'performance optimizations',
          'best practices',
          'cross-functional teams',
          'technical solutions',
          'Mentored',
          'skill development',
          'technical challenges'
        ]
      }
    },
    {
      title: 'Product Developer',
      company: 'Inncircles Technologies Pvt. Ltd.',
      date: 'October 2021 - July 2024',
      description: {
        text: 'Developed high-quality features with a strong focus on delivering bug-free code. Conducted in-depth task analysis to ensure clear understanding and efficient execution. Followed best coding practices and performed thorough testing to maintain software stability. Collaborated with cross-functional teams to refine requirements and enhance product functionality. Optimized existing code for better performance, scalability, and maintainability.',
        highlights: [
          'high-quality features',
          'bug-free code',
          'task analysis',
          'best coding practices',
          'thorough testing',
          'software stability',
          'cross-functional teams',
          'product functionality',
          'performance',
          'scalability',
          'maintainability'
        ]
      }
    },
    {
      title: 'Data Analyst',
      company: 'TechLearn Pvt Ltd',
      date: 'January 2021 - October 2021',
      description: {
        text: 'Analyzed complex datasets to extract meaningful insights and drive data-driven decision-making. Created interactive dashboards and reports to visualize key performance metrics.',
        highlights: [
          'complex datasets',
          'meaningful insights',
          'data-driven decision-making',
          'interactive dashboards',
          'performance metrics'
        ]
      }
    }
  ];

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Header>
        <StarryText>Experience</StarryText>
      </Header>
      <Content>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} $isLast={index === experiences.length - 1}>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>{exp.title}</TimelineTitle>
                  <CompanyName>{exp.company}</CompanyName>
                  <TimelineDate>{exp.date}</TimelineDate>
                </TimelineHeader>
                <TimelineDescription $isOdd={index % 2 === 0}>
                  <StyledHighlightedText
                    text={exp.description.text}
                    highlights={exp.description.highlights}
                  />
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </Container>
  );
};

export default Experience; 