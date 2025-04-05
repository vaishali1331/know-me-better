import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Name } from './Name';
import { Subtitle } from './Subtitle';
import RotatingText from './RotatingText';
import React from 'react';

const Container = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 25%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    z-index: 2;
    padding-left: 2rem;
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