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
  max-width: 1200px;
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

const ProjectCard = styled.div`
  background: var(--primary-bg-color);;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const ProjectDate = styled.div`
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const ProjectCompany = styled.div`
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Technologies = styled.div`
  margin: 1.5rem 0;
`;

const TechnologiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechnologyItem = styled.li`
  background: var(--secondary-bg-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 215, 0, 0.2);
`;

const ProjectDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--primary-color);
`;

const StyledHighlightedText = styled(HighlightedText)`
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  color: var(--accent-color);
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

interface ProjectsProps {
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const projects = [
    {
      title: 'Construction AI',
      date: 'February 2025 - Present',
      company: 'Inncircles Technologies Pvt Ltd',
      url: 'https://www.inncircles.ai/',
      description: {
        text: 'An AI-powered platform revolutionizing the construction industry. Led the development of InnDocs.AI, an intelligent document solution integrating LLMs and Generative AI. Designed and optimized LLM-based workflows, enabling smart document processing and automated insights. Developed and fine-tuned Generative AI models for intelligent search, summarization, and document classification. Implemented prompt engineering strategies to enhance AI accuracy and response quality. Led a team in building web-based CRUD operations, ensuring seamless data management and user experience.',
        highlights: [
          'AI-powered platform',
          'InnDocs.AI',
          'LLMs',
          'Generative AI',
          'LLM-based workflows',
          'smart document processing',
          'automated insights',
          'Generative AI models',
          'intelligent search',
          'summarization',
          'document classification',
          'prompt engineering',
          'AI accuracy',
          'response quality',
          'CRUD operations',
          'data management',
          'user experience'
        ]
      },
      technologies: [
        'Generative AI',
        'LLMs',
        'Docker',
        'Angular.js',
        'Node.js',
        'MongoDB',
        'AWS'
      ]
    },
    {
      title: 'Inncircles Arena',
      date: 'March 2022 - January 2025',
      company: 'Inncircles Technologies Pvt Ltd',
      url: 'https://inncircles.com/',
      description: {
        text: 'A SaaS platform transforming the construction industry through digital solutions. Designed and developed core management tools, including Time Management, Proposal Management, Equipment Management, Productivity Logs, and Drawing Management, streamlining operations for construction firms. Engineered and maintained core functionalities using the MEAN Stack for web and React Native for mobile applications. Leveraged AWS and TypeScript to ensure scalability, high performance, and secure cloud-based solutions. Delivered solutions aligned with industry standards, leading to increased adoption by major construction companies.',
        highlights: [
          'SaaS platform',
          'Time Management',
          'Proposal Management',
          'Equipment Management',
          'Productivity Logs',
          'Drawing Management',
          'MEAN Stack',
          'React Native',
          'AWS',
          'TypeScript',
          'scalability',
          'high performance',
          'cloud-based solutions',
          'industry standards'
        ]
      },
      technologies: [
        'Angular.js',
        'Node.js',
        'MongoDB',
        'AWS',
        'React Native'
      ]
    },
    {
      title: 'TechLearn',
      date: 'October 2021 - February 2022',
      company: 'Inncircles Technologies Pvt Ltd',
      description: {
        text: 'An EdTech platform providing live training sessions and curated course content. Contributed to the development of interactive learning features. Developed a Generic Content Plugin, enabling rich-text content compatibility across multiple frameworks, including Angular and React Native. Built an Interactive Learning Framework with coding exercises, quizzes, and collaborative features to enhance learner engagement. Worked on MEAN Stack for web development and contributed to React Native mobile development.',
        highlights: [
          'EdTech platform',
          'live training sessions',
          'curated course content',
          'Generic Content Plugin',
          'rich-text content',
          'Angular',
          'React Native',
          'Interactive Learning Framework',
          'coding exercises',
          'quizzes',
          'collaborative features',
          'learner engagement',
          'MEAN Stack'
        ]
      },
      technologies: [
        'Angular.js',
        'Node.js',
        'MongoDB',
        'React Native'
      ]
    }
  ];

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Header>
        <StarryText>Projects</StarryText>
      </Header>
      <Content>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDate>{project.date}</ProjectDate>
            <ProjectCompany>{project.company}</ProjectCompany>

            <Technologies>
              <TechnologiesList>
                {project.technologies.map((tech, techIndex) => (
                  <TechnologyItem key={techIndex}>{tech}</TechnologyItem>
                ))}
              </TechnologiesList>
            </Technologies>

            <ProjectDescription>
              <StyledHighlightedText
                text={project.description.text}
                highlights={project.description.highlights}
              />
            </ProjectDescription>

            {project.url && (
              <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
                View Project →
              </ProjectLink>
            )}
          </ProjectCard>
        ))}
      </Content>
    </Container>
  );
};

export default Projects; 