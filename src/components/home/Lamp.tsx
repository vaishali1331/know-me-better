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

const SwitchContainer = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 3.5rem;
  height: 2rem;
  cursor: pointer;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--accent-color);
  }

  &:checked + span:before {
    transform: translateX(1.5rem);
    background-color: var(--primary-color);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  transition: .4s;
  border-radius: 2rem;
  border: 2px solid #666;

  &:before {
    position: absolute;
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    left: 0.25rem;
    bottom: 0.125rem;
    background-color: var(--accent-color);
    transition: .4s;
    border-radius: 50%;
  }

  &:hover {
    box-shadow: 0 0 10px var(--accent-color);
  }
`;

const LampImage = styled.img`
  height: 50rem;
  object-fit: contain;
  position: relative;
  bottom: 0;
  cursor: pointer;
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
    <>
      <SwitchContainer>
        <SwitchLabel>
          <SwitchInput type="checkbox" checked={isOn} onChange={onBulbClick} />
          <SwitchSlider />
        </SwitchLabel>
      </SwitchContainer>
      <LampContainer style={style}>
        <LampImage
          src={lamp}
          alt="lamp"
          onClick={onBulbClick}
        />
        <LightBeam isOn={isOn} />
      </LampContainer>
    </>
  );
};

export default Lamp; 