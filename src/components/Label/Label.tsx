import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  text: string;
  htmlFor: string;
  style?: React.CSSProperties;
}

const StyledLabel = styled.label`
  font-family: Calibri;
  font-size: 14px;
  color: #333;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, style }) => {
  return (
    <StyledLabel htmlFor={htmlFor} style={style}>
      {text}
    </StyledLabel>
  );
};

export default Label;
export type { LabelProps };