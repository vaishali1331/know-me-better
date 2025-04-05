import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
`;

const CloudsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #4682B4 0%,
    #87CEEB 25%,
    #B0E0E6 50%,
    #E0F6FF 75%,
    #F0F8FF 100%
  );
  z-index: 1;
  overflow: hidden;
`;

const Cloud = styled(motion.div) <{ $size: number; $opacity: number; $speed: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size * 0.6}px;
  background: rgba(255, 255, 255, ${props => props.$opacity});
  border-radius: 50px;
  filter: blur(5px);
  animation: ${float} ${props => props.$speed}s linear infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: inherit;
    border-radius: inherit;
  }

  &::before {
    width: 60%;
    height: 80%;
    top: -40%;
    left: 20%;
  }

  &::after {
    width: 80%;
    height: 80%;
    top: -30%;
    right: 20%;
  }
`;

// Generate cloud properties once outside the component
const CLOUDS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  size: Math.random() * 100 + 100, // Size between 100-200px
  opacity: Math.random() * 0.3 + 0.7, // Opacity between 0.7-1
  speed: Math.random() * 20 + 30, // Animation duration between 30-50s
  top: Math.random() * 70 + 10, // Position between 10-80% from top
  delay: Math.random() * -30, // Random start position
}));

const CloudsBackground: React.FC = () => {
  return (
    <CloudsContainer>
      {CLOUDS.map(cloud => (
        <Cloud
          key={cloud.id}
          $size={cloud.size}
          $opacity={cloud.opacity}
          $speed={cloud.speed}
          style={{
            top: `${cloud.top}%`,
            animationDelay: `${cloud.delay}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      ))}
    </CloudsContainer>
  );
};

export default CloudsBackground; 