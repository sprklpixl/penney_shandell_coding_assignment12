import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  style?: React.CSSProperties;
}

const StyledRadioButton = styled.input<RadioButtonProps>`
  margin-right: 10px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, checked, onChange, style }) => {
  return (
    <StyledRadioButton
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      style={style}
    />
  );
};

export default RadioButton;
export type { RadioButtonProps };