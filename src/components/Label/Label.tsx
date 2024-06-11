import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  htmlFor: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledLabel = styled.label<ThemedStyledProps<LabelProps>>`
  font-family: Calibri;
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? '#aaa' : '#333')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled, backgroundColor, style }) => {
  return (
    <StyledLabel 
      htmlFor={htmlFor}
      disabled={disabled}
      backgroundColor={backgroundColor}
      style={style}>
      {text}
    </StyledLabel>
  );
};

export default Label;
export type { LabelProps };