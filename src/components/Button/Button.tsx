import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'large';
}

const StyledButton = styled.button<ThemedStyledProps<ButtonProps>>`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  font-family: Calibri;
  font-weight: bold;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
  color: #fff;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${({ backgroundColor, disabled }) =>
      !disabled && (backgroundColor ? shadeColor(backgroundColor, -20) : '#0056b3')};
  }
  }
`;

// Helper function to shade a color
const shadeColor = (color: string, percent: number) => {
  const num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, backgroundColor, style }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} backgroundColor={backgroundColor} style={style}>
      {label}
    </StyledButton>
  );
};

export default Button;
export type { ButtonProps };