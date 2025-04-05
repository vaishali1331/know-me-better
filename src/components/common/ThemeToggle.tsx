import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ThemeToggleButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SunIcon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: currentColor;
  filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.5));
`;

const MoonIcon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: currentColor;
  filter: drop-shadow(0 0 8px rgba(147, 112, 219, 0.5));
`;

interface ThemeToggleProps {
    isDayTheme: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDayTheme, onToggle }) => {
    return (
        <ThemeToggleButton
            onClick={onToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {isDayTheme ? (
                <MoonIcon viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1E3A8A" />
                            <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                    </defs>
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" fill="url(#moonGradient)" />
                </MoonIcon>
            ) : (
                <SunIcon viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="100%" stopColor="#FFA500" />
                        </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="5" fill="url(#sunGradient)" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                        fill="none"
                        stroke="url(#sunGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                        fill="none"
                        stroke="url(#sunGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" fill="url(#sunGradient)" />
                </SunIcon>
            )}
        </ThemeToggleButton>
    );
};

export default ThemeToggle; 