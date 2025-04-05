import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const texts = [
    "I love to play badminton",
    "My cat's name is Pluto",
    "Sketching and Painting is my passion",
    "Love to explore new places"
];

const Text = styled(motion.p) <{ isNeon: boolean }>`
    color: ${props => props.isNeon ? 'white' : 'rgba(255, 255, 255, 0.8)'};
    font-size: 1.5rem;
    margin: 0;
    text-shadow: ${props => props.isNeon
        ? 'none'
        : '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #ff00, 0 0 80px #ff00, 0 0 90px #ff00, 0 0 100px #ff00, 0 0 150px #ff00'};
    min-height: 1.5rem;
    text-stroke: ${props => props.isNeon ? '1px rgba(255, 0, 0, 0.5)' : 'none'};
    transition: all 0.3s ease-in-out;
`;

const Cursor = styled.span<{ isNeon: boolean }>`
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background-color: ${props => props.isNeon ? 'white' : 'rgba(255, 255, 255, 0.8)'};
    margin-left: 2px;
    animation: blink 1s step-end infinite;
    
    @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
    }
`;

interface RotatingTextProps {
    isNeon: boolean;
}

const RotatingText: React.FC<RotatingTextProps> = ({ isNeon }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const text = texts[currentIndex];

        if (isTyping) {
            if (currentText.length < text.length) {
                timeout = setTimeout(() => {
                    setCurrentText(text.slice(0, currentText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000);
            }
        } else {
            if (currentText.length > 0) {
                timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, -1));
                }, 50);
            } else {
                setIsTyping(true);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isTyping]);

    return (
        <Text isNeon={isNeon}>
            {currentText}
            <Cursor isNeon={isNeon} />
        </Text>
    );
};

export default RotatingText; 