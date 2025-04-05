import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Name } from './Name';
import { Subtitle } from './Subtitle';
import RotatingText from './RotatingText';
import React from 'react';

const Container = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 2;
    padding: 1rem;
    width: auto;
    height: auto;
`;

interface TextContainerProps {
    isNeon: boolean;
}

const TextContainer: React.FC<TextContainerProps> = ({ isNeon }) => {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Name isNeon={isNeon}>
                {'Vaishali Gangwar'}
            </Name>
            <Subtitle isNeon={isNeon}>
                A full stack developer
            </Subtitle>
            <RotatingText isNeon={isNeon} />
        </Container>
    );
};

export default TextContainer; 