import React from 'react';
import styled from 'styled-components';
import { Website } from '../Image/Image.stories';
import Text from '../Text/Text';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  textContent: string;
  style?: React.CSSProperties;
}

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, title, textContent, style }) => {
  return (
    <CardContainer style={style}>
      <Website src={imageSrc} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
      <Text title={title} content={textContent} style={{ padding: '12px' }} />
    </CardContainer>
  );
};

export default Card;
export type { CardProps };