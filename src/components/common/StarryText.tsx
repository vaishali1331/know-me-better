import React from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

interface StarProps {
    $delay: string;
}

const Star = styled.span<StarProps>`
  position: absolute;
  font-size: 0.5em;
  color: #ffffff;
  animation: ${twinkle} 2s infinite;
  animation-delay: ${props => props.$delay || '0s'};
`;

const StarryTextContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 1rem;
`;

const Character = styled.span`
  display: inline-block;
  transition: all 0.3s ease;
  text-shadow: none;
  white-space: pre;
  
  &:hover {
    text-shadow: 0 0 5px #fff, 
                 0 0 10px #fff, 
                 0 0 20px #fff, 
                 0 0 40px #ff00, 
                 0 0 80px #ff00, 
                 0 0 90px #ff00, 
                 0 0 100px #ff00, 
                 0 0 150px #ff00;
  }
`;

const StarryText = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  position: relative;
  display: inline-block;
  cursor: pointer;
  white-space: pre;
`;

interface StarryTextProps {
    children: React.ReactNode;
}

const StarryTextComponent: React.FC<StarryTextProps> = ({ children }) => {
    const stars = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: `${i * 0.25}s`,
        position: {
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 60 + 20}%`
        }
    }));

    const text = children?.toString() || '';
    const characters = text.split('');

    return (
        <StarryTextContainer>
            <StarryText>
                {characters.map((char, index) => (
                    <Character key={index}>{char}</Character>
                ))}
            </StarryText>
            {stars.map(star => (
                <Star
                    key={star.id}
                    $delay={star.delay}
                    style={{
                        top: star.position.top,
                        left: star.position.left
                    }}
                >
                    ✨
                </Star>
            ))}
        </StarryTextContainer>
    );
};

export default StarryTextComponent; 