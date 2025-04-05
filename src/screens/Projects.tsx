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
  max-width: 1200px;
  padding: 2rem;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffd700;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ffd700;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffd700;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(255, 215, 0, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

interface ProjectsProps {
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and TypeScript.',
      tags: ['React', 'TypeScript', 'Styled Components']
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration.',
      tags: ['Node.js', 'React', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      tags: ['React', 'Firebase', 'Redux']
    }
  ];

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Content>
        <Title>My Projects</Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>Project {index + 1}</ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Content>
    </Container>
  );
};

export default Projects; 