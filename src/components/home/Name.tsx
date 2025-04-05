import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Name = styled(motion.h1) <{ isNeon: boolean }>`
    font-size: 5rem;
    color: ${props => props.isNeon ? 'white' : 'rgba(255, 255, 255, 0.8)'};
    text-shadow: ${props => props.isNeon
        ? 'none'
        : '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #ff00, 0 0 80px #ff00, 0 0 90px #ff00, 0 0 100px #ff00, 0 0 150px #ff00'};
    z-index: 2;
    font-family: 'Arial', sans-serif;
    white-space: nowrap;
    text-stroke: ${props => props.isNeon ? '1px rgba(255, 0, 0, 0.5)' : 'none'};
    padding: 1rem 0rem;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px dashed white;
`; 