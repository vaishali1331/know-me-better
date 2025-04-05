import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackButtonContainer = styled(motion.button)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

interface BackButtonProps {
    onBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
    return (
        <BackButtonContainer
            onClick={onBack}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            ← Back to Home
        </BackButtonContainer>
    );
};

export default BackButton; 