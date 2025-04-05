import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const DirectionPoleContainer = styled.div`
  position: absolute;
  right: 10%;
  bottom: 0;
  z-index: 2;
`;

const Pole = styled.div`
  width: 1rem;
  height: 25rem;
  background: 
    linear-gradient(
      90deg,
      #111 0%,
      #222 30%,
      #444 50%,
      #222 70%,
      #111 100%
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.2) 40%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.2) 60%,
      rgba(255, 255, 255, 0.1) 100%
    );
  background-blend-mode: overlay;
  position: relative;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 
    inset 0 0 10px rgba(0, 0, 0, 0.5),
    inset 0 0 20px rgba(0, 0, 0, 0.3),
    0 0 5px rgba(0, 0, 0, 0.3),
    0 0 10px rgba(0, 0, 0, 0.2);
`;

const DirectionSign = styled(motion.div) <{ isRightSide: boolean }>`
  position: absolute;
  background: 
    linear-gradient(
      135deg,
      #333 0%,
      #444 30%,
      #555 50%,
      #444 70%,
      #333 100%
    ),
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.2) 40%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.2) 60%,
      rgba(255, 255, 255, 0.1) 100%
    );
  background-blend-mode: overlay;
  color: white;
  cursor: pointer;
  transform-origin: left center;
  font-family: 'Arial', sans-serif;
  padding: 0rem 1rem;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    inset 0 0 5px rgba(0, 0, 0, 0.3),
    inset 0 0 10px rgba(0, 0, 0, 0.2),
    0 0 3px rgba(0, 0, 0, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 10px solid #444;
    display: ${props => props.isRightSide ? 'none' : 'block'};
  }

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 10px solid #444;
    display: ${props => props.isRightSide ? 'block' : 'none'};
  }
  
  &:hover {
    background: 
      linear-gradient(
        135deg,
        #444 0%,
        #555 30%,
        #666 50%,
        #555 70%,
        #444 100%
      ),
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.3) 40%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.2) 100%
      );
    background-blend-mode: overlay;
    &::after {
      border-left-color: #555;
    }
    &::before {
      border-right-color: #555;
    }
  }
`;

interface Direction {
    text: string;
    angle: number;
    path: string;
}

interface DirectionSignItemProps {
    direction: Direction;
    index: number;
    onNavigate: (path: string) => void;
}

const DirectionSignItem: React.FC<DirectionSignItemProps> = ({ direction, index, onNavigate }) => {
    const controls = useAnimation();
    const isRightSide = index % 2 === 0;

    const handleClick = async () => {
        await controls.start({
            scale: 1.5,
            transition: { duration: 0.1, ease: "easeOut" }
        });
        onNavigate(direction.path);
    };

    return (
        <DirectionSign
            isRightSide={isRightSide}
            animate={controls}
            initial={{ scale: 1 }}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
            }}
            onClick={handleClick}
            style={{
                top: `${index * 2 + 0.5}rem `,
                left: isRightSide ? 'auto' : '1rem',
                right: isRightSide ? '1rem' : 'auto',
                transformOrigin: isRightSide ? 'right center' : 'left center',
                zIndex: 1
            }}
        >
            {direction.text}
        </DirectionSign>
    );
};

interface DirectionPoleProps {
    directions: Direction[];
    onNavigate: (path: string) => void;
}

const DirectionPole: React.FC<DirectionPoleProps> = ({ directions, onNavigate }) => {
    return (
        <DirectionPoleContainer>
            <Pole>
                {directions.map((direction, index) => (
                    <DirectionSignItem
                        key={index}
                        direction={direction}
                        index={index}
                        onNavigate={onNavigate}
                    />
                ))}
            </Pole>
        </DirectionPoleContainer>
    );
};

export default DirectionPole; 