import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #090b1f;
  overflow: hidden;
  z-index: 1;
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 0.125rem;
  height: 0.125rem;
  background: white;
  border-radius: 50%;
`;

const NebulaPatches = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 31.25rem;
    height: 31.25rem;
    border-radius: 50%;
    filter: blur(5rem);
    opacity: 0.3;
  }

  &::before {
    top: 15%;
    left: 12%;
    background: radial-gradient(circle, rgba(255, 123, 255, 0.5) 0%, transparent 70%);
    animation: floatNebula1 20s infinite ease-in-out;
  }

  &::after {
    bottom: 35%;
    right: 8%;
    background: radial-gradient(circle, rgba(64, 156, 255, 0.5) 0%, transparent 70%);
    animation: floatNebula2 25s infinite ease-in-out;
  }

  @keyframes floatNebula1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(3.125rem, 1.875rem) scale(1.1); }
  }

  @keyframes floatNebula2 {
    0%, 100% { transform: translate(0, 0) scale(1.1); }
    50% { transform: translate(-2.5rem, -1.25rem) scale(1); }
  }
`;

const AdditionalNebulaPatches = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    filter: blur(4.375rem);
    opacity: 0.25;
  }

  &::before {
    top: 68%;
    left: 72%;
    background: radial-gradient(circle, rgba(255, 190, 100, 0.5) 0%, transparent 70%);
    animation: floatNebula3 22s infinite ease-in-out;
  }

  &::after {
    top: 8%;
    right: 32%;
    background: radial-gradient(circle, rgba(100, 255, 218, 0.5) 0%, transparent 70%);
    animation: floatNebula4 28s infinite ease-in-out;
  }

  @keyframes floatNebula3 {
    0%, 100% { transform: translate(0, 0) scale(1.1); }
    50% { transform: translate(1.875rem, -2.5rem) scale(1); }
  }

  @keyframes floatNebula4 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-1.25rem, 3.125rem) scale(1.2); }
  }
`;

const StarsBackground: React.FC = () => {
    return (
        <StarsContainer>
            <NebulaPatches />
            <AdditionalNebulaPatches />
            {Array.from({ length: 100 }).map((_, i) => (
                <Star
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                />
            ))}
        </StarsContainer>
    );
};

export default StarsBackground; 