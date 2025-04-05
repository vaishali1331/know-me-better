import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import lamp from '../../assets/lamp6.png';

const LampContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  margin-bottom: 0rem;
`;

const LampImage = styled.img`
  height: 50rem;
  object-fit: contain;
  position: relative;
  bottom: 0;
`;

const LightBeam = styled(motion.div) <{ isOn: boolean }>`
  position: absolute;
  width: 50vw;
  height: 78vh;
  background: ${props => props.isOn
    ? `linear-gradient(
        180deg,
        rgba(255,215,0,0.3) 0%,
        rgba(255,215,0,0.2) 20%,
        rgba(255,215,0,0.1) 40%,
        rgba(255,215,0,0) 100%
      )`
    : 'transparent'};
  top: 22vh;
  right: -8vw;
  pointer-events: none;
  transform-origin: center;
  clip-path: polygon(45% 0, 55% 0, 100% 100%, 0 100%);
  box-shadow: ${props => props.isOn
    ? `0 0 1rem rgba(255,215,0,0.2),
       0 0 2rem rgba(255,215,0,0.1),
       0 0 4rem rgba(255,215,0,0.05)`
    : 'none'};
`;

interface LampProps {
  isOn: boolean;
  onBulbClick: () => void;
  style?: React.CSSProperties;
}

const Lamp: React.FC<LampProps> = ({ isOn, onBulbClick, style }) => {
  return (
    <LampContainer style={style}>
      <LampImage
        src={lamp}
        alt="lamp"
        onClick={onBulbClick}
        style={{ cursor: 'pointer' }}
      />
      <LightBeam isOn={isOn} />
    </LampContainer>
  );
};

export default Lamp; 