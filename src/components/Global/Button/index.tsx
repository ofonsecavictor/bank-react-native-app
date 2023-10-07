import React from 'react';
import * as S from './styled';

interface ButtonProps {
  primary: boolean;
  width?: string | number;
  height?: string | number;
  title: string | number;
  fontSize?: string | number;
  top?: string;
}
export function Button({
  primary,
  width,
  height,
  title,
  fontSize,
  top,
}: ButtonProps) {
  return (
    <S.Button primary={primary} width={width} height={height} top={top}>
      <S.Text primary={primary} fontSize={fontSize}>
        {title}
      </S.Text>
    </S.Button>
  );
}
