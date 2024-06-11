import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

const StyledRadioButton = styled.input<RadioButtonProps>`
  margin-right: 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, checked, onChange, disabled, backgroundColor, style }) => {
  return (
    <StyledRadioButton
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      backgroundColor={backgroundColor}
      style={style}
    />
  );
};

export default RadioButton;
export type { RadioButtonProps };