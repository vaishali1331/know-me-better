import React from 'react';
import styled, { keyframes } from 'styled-components';
import BackButton from '../components/common/BackButton';
import StarryText from '../components/common/StarryText';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const starPulse = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 25rem);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircleContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate 20s linear infinite;
  z-index: 1;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SocialLink = styled.a<{ angle: number; radius: number }>`
  position: absolute;
  transform: rotate(${props => props.angle}deg) translate(${props => props.radius}px) rotate(-${props => props.angle}deg);
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 0.0625rem solid transparent;
  position: relative;
  overflow: hidden;
  z-index: ${props => {
    const normalizedAngle = props.angle % 360;
    return normalizedAngle > 180 ? 3 : 10;
  }};

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: rgba(255, 215, 0, 0.3);
    transform: rotate(${props => props.angle}deg) translate(${props => props.radius}px) rotate(-${props => props.angle}deg) scale(1.2);
    color: #ffd700;
  }

  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    white-space: nowrap;
    z-index: 20;
  }

  svg {
    transform: rotate(${props => props.angle}deg);
    animation: ${starPulse} 2s infinite;
  }
`;

interface SocialsProps {
  onBack: () => void;
}

const Socials: React.FC<SocialsProps> = ({ onBack }) => {
  const socials = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/vaishali1331',
      tooltip: 'GitHub: @vaishali1331'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/vaishali-gangwar-2323091a0/',
      tooltip: 'LinkedIn: Vaishali Gangwar'
    },
    {
      name: 'Gmail',
      icon: MdEmail,
      url: 'mailto:vaishali13gangwar@gmail.com',
      tooltip: 'Email: vaishali13gangwar@gmail.com'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/vaishali._.gangwar/#',
      tooltip: 'Instagram: @vaishali._.gangwar'
    }
  ];

  const getAngle = (index: number, total: number) => {
    return (index * 360) / total;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <Container>
      <BackButton onBack={onBack} />
      <Content>
        <Header>
          <StarryText>Connect With Me</StarryText>
        </Header>
        <CircleContainer>
          {socials.map((social, index) => (
            <SocialLink
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              angle={getAngle(index, socials.length)}
              radius={180}
              data-tooltip={social.tooltip}
              onClick={handleClick}
            >
              <social.icon />
            </SocialLink>
          ))}
        </CircleContainer>
      </Content>
    </Container>
  );
};

export default Socials;