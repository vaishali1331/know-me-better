import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ScreenContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: auto;
`; 