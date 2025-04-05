import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Highlight = styled.span`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 4px;
  margin: 0 -4px;
  
  &:hover {
    color: var(--accent-color);
    text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><defs><radialGradient id='starGradient' cx='50%' cy='50%' r='50%'><stop offset='0%' stop-color='%23fff6a9'/><stop offset='50%' stop-color='%23ffd700'/><stop offset='100%' stop-color='%23b8860b'/></radialGradient></defs><path d='M12 0L15.163 8.494L24 8.494L16.837 13.506L19.798 22L12 17.413L4.202 22L7.163 13.506L0 8.494L8.837 8.494L12 0Z' fill='url(%23starGradient)'/></svg>") 12 12, auto;
    
    &:before {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    transform: scaleX(0);
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

interface HighlightedTextProps {
  text: string;
  highlights: string[];
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlights, className }) => {
  const renderHighlightedText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      result = result.replace(regex, `<highlight>$1</highlight>`);
    });

    const parts = result.split(/(<highlight>.*?<\/highlight>)/g);
    return parts.map((part, index) => {
      if (part.startsWith('<highlight>')) {
        const content = part.replace(/<\/?highlight>/g, '');
        return <Highlight key={index}>{content}</Highlight>;
      }
      return part;
    });
  };

  return (
    <TextContainer className={className}>
      {renderHighlightedText(text, highlights)}
    </TextContainer>
  );
};

export default HighlightedText; 