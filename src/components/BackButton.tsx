import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoChevronBack } from 'react-icons/io5';

const BackButtonContainer = styled(motion.button)`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ChevronIcon = styled(IoChevronBack)`
  font-size: 1.2rem;
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
            <ChevronIcon />
        </BackButtonContainer>
    );
};

export default BackButton; 