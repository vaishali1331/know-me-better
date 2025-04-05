import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Subtitle = styled(motion.p) <{ isNeon: boolean }>`
    color: var(--primary-color);
    font-size: 2rem;
    margin: 0;
    text-shadow: ${props => props.isNeon
        ? 'none'
        : '0 0 5px var(--primary-color), 0 0 10px var(--primary-color), 0 0 20px var(--primary-color), 0 0 40px #ff00, 0 0 80px #ff00, 0 0 90px #ff00, 0 0 100px #ff00, 0 0 150px #ff00'};
    z-index: 2;
    font-family: 'Arial', sans-serif;
    text-stroke: ${props => props.isNeon ? '1px rgba(255, 0, 0, 0.5)' : 'none'};
    transition: all 0.3s ease-in-out;
`; 