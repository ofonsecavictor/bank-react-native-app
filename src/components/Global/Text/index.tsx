import React from 'react';
import * as S from './styled';

interface TextProps {
  content: string | number;
  color: string;
  size: string | number;
  fontWeight?: string | number;
}
export function Text({content, color, size, fontWeight}: TextProps) {
  return (
    <S.Text color={color} fontSize={size} fontWeight={fontWeight}>
      {content}
    </S.Text>
  );
}
