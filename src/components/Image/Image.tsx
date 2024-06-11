import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0'};
`;

const Image: React.FC<ImageProps> = ({ src, alt, width, height, borderRadius }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} />;
};

export default Image;
export type { ImageProps };