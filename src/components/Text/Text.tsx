import React from 'react';
import styled from 'styled-components';

interface TextProps {
  title?: string;
  content: string;
  style?: React.CSSProperties;
}

const StyledText = styled.div`
  padding: 8px;
`;

const Title = styled.h3`
  margin: 0;
  padding-bottom: 8px;
  font-family: Calibri;
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

const Content = styled.p`
  font-family: Calibri;
  font-size: 14px;
  color: #000;
`;

const Text: React.FC<TextProps> = ({ title, content, style }) => {
  return (
    <StyledText style={style}>
      {title && <Title>{title}</Title>}
      <Content>{content}</Content>
    </StyledText>
  );
};

export default Text;
export type { TextProps };


