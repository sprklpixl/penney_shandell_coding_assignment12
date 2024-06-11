import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
  size?: 'small' | 'large';
}

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  font-family: Calibri;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
export type { ButtonProps };