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

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SocialCard = styled.a`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SocialIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd700;
`;

const SocialName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const SocialHandle = styled.p`
  color: #aaa;
`;

interface SocialsProps {
  onBack: () => void;
}

const Socials: React.FC<SocialsProps> = ({ onBack }) => {
  const socials = [
    {
      name: 'GitHub',
      handle: '@vaishali',
      icon: '💻',
      url: 'https://github.com'
    },
    {
      name: 'LinkedIn',
      handle: '@vaishali',
      icon: '🔗',
      url: 'https://linkedin.com'
    },
    {
      name: 'Twitter',
      handle: '@vaishali',
      icon: '🐦',
      url: 'https://twitter.com'
    },
    {
      name: 'Instagram',
      handle: '@vaishali',
      icon: '📸',
      url: 'https://instagram.com'
    }
  ];

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Content>
        <Title>Connect With Me</Title>
        <SocialGrid>
          {socials.map((social, index) => (
            <SocialCard key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <SocialIcon>{social.icon}</SocialIcon>
              <SocialName>{social.name}</SocialName>
              <SocialHandle>{social.handle}</SocialHandle>
            </SocialCard>
          ))}
        </SocialGrid>
      </Content>
    </Container>
  );
};

export default Socials; 