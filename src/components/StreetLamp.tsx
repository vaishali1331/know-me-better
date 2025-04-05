import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StreetLampContainer = styled.div`
  position: absolute;
  left: 10%;
  bottom: 0;
  z-index: 2;
`;

const LampPost = styled.div`
  width: 1.25rem;
  height: 37.5rem;
  background: #333;
  position: relative;
`;

const LampHead = styled.div`
  width: 3.75rem;
  height: 2.5rem;
  background: #444;
  border-radius: 0.625rem;
  position: absolute;
  top: -2.5rem;
  right: -1.25rem;
  transform: rotate(90deg);
  transform-origin: right center;
`;

const Bulb = styled(motion.div) <{ isOn: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  background: ${props => props.isOn ? '#ffd700' : '#666'};
  border-radius: 50%;
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  cursor: pointer;
  box-shadow: ${props => props.isOn ? '0 0 1.25rem #ffd700' : 'none'};
  transform: rotate(-90deg);
  transform-origin: center;
`;

const LightBeam = styled(motion.div) <{ isOn: boolean }>`
  position: absolute;
  width: 40rem;
  height: 20rem;
  background: ${props => props.isOn ? 'linear-gradient(90deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 100%)' : 'transparent'};
  top: -5.5rem;
  right: -45rem;
  pointer-events: none;
  transform-origin: left center;
  transform: rotate(180deg);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
`;

interface StreetLampProps {
  isLampOn: boolean;
  onBulbClick: () => void;
  style?: React.CSSProperties;
}

const StreetLamp: React.FC<StreetLampProps> = ({ isLampOn, onBulbClick, style }) => {
  return (
    <StreetLampContainer style={style}>
      <LampPost>
        <LampHead>
          <Bulb isOn={isLampOn} onClick={onBulbClick} />
          <LightBeam isOn={isLampOn} />
        </LampHead>
      </LampPost>
    </StreetLampContainer>
  );
};

export default StreetLamp; 