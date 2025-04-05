import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
`;

const StarsBackground: React.FC = () => {
    return (
        <StarsContainer>
            {Array.from({ length: 100 }).map((_, i) => (
                <Star
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                />
            ))}
        </StarsContainer>
    );
};

export default StarsBackground; 