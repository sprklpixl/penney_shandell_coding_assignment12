import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  content: string;
  disabled?: boolean;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

const StyledText = styled.div<ThemedStyledProps<TextProps>>`
  padding: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  color: ${({ disabled }) => (disabled ? '#aaa' : '#666')};
`;

const Title = styled.h3`
  margin: 0;
  padding-bottom: 8px;
  font-family: Calibri;
  font-weight: bold;
  font-size: 18px;
  color: inherit;
`;

const Content = styled.p`
  font-family: Calibri;
  font-size: 14px;
  color: inherit;
`;

const Text: React.FC<TextProps> = ({ title, content, disabled, backgroundColor, style }) => {
  return (
    <StyledText
      disabled={disabled}
      backgroundColor={backgroundColor}
      style={style}>
      {title && <Title>{title}</Title>}
      <Content>{content}</Content>
    </StyledText>
  );
};

export default Text;
export type { TextProps };


