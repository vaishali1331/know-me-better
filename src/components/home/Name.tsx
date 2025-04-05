import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

const glow = keyframes`
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffd700, 0 0 30px #ffd700; }
  50% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffd700, 0 0 40px #ffd700; }
  100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffd700, 0 0 30px #ffd700; }
`;

const Character = styled(motion.span)`
    display: inline-block;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    z-index: 10;
    
    &:hover {
        animation: ${glow} 2s ease-in-out infinite;
        transform: scale(1.2) translateY(-5px);
        color: inherit;
    }
`;

const NameContainer = styled(motion.h1) <{ isNeon: boolean }>`
    font-size: 5rem;
    color: ${props => props.isNeon ? 'white' : 'rgba(255, 255, 255, 0.8)'};
    text-shadow: ${props => props.isNeon
        ? 'none'
        : '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #ff00, 0 0 80px #ff00, 0 0 90px #ff00, 0 0 100px #ff00, 0 0 150px #ff00'};
    z-index: 10;
    font-family: 'Arial', sans-serif;
    white-space: nowrap;
    text-stroke: ${props => props.isNeon ? '1px rgba(255, 0, 0, 0.5)' : 'none'};
    padding: 1rem 0rem;
    border-bottom: 1px dashed white;
    position: relative;
`;

interface NameProps {
    isNeon: boolean;
    children: string;
}

export const Name: React.FC<NameProps> = ({ children, isNeon }) => {
    const name = children?.toString() || '';
    const [firstName, lastName] = name.split(' ');

    return (
        <NameContainer isNeon={isNeon}>
            {firstName.split('').map((char, index) => (
                <Character key={index} whileHover={{ scale: 1.2, y: -5 }}>{char}</Character>
            ))}
            <Character style={{ width: '0.5em' }}>&nbsp;</Character>
            {lastName.split('').map((char, index) => (
                <Character key={index} whileHover={{ scale: 1.2, y: -5 }}>{char}</Character>
            ))}
        </NameContainer>
    );
}; 