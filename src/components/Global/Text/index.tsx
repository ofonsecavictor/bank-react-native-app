import React from 'react';
import * as S from './styled';

interface TextProps {
  content: string | number;
  color: string;
  size?: string | number;
  fontWeight?: string | number;
  top?: string | number;
  bottom?: string | number;
}
export function Text({
  content,
  color,
  size,
  fontWeight,
  top,
  bottom,
}: TextProps) {
  return (
    <S.Text
      color={color}
      fontSize={size}
      fontWeight={fontWeight}
      top={top}
      bottom={bottom}>
      {content}
    </S.Text>
  );
}
