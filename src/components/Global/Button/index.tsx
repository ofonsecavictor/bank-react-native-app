import React from 'react';
import * as S from './styled';

interface ButtonProps {
  primary: boolean;
  width?: string | number;
  height?: string | number;
  title: string | number;
  fontSize?: string | number;
  top?: string;
  bottom?: string;
  fontWeight?: string;
  onPress?: any;
  disabled?: boolean;
}

export function Button({
  primary,
  width,
  height,
  title,
  fontSize,
  top,
  bottom,
  fontWeight,
  onPress,
  disabled,
}: ButtonProps) {
  return (
    <S.Button
      primary={primary}
      width={width}
      height={height}
      top={top}
      bottom={bottom}
      onPress={onPress}
      disabled={disabled}>
      <S.Text primary={primary} fontSize={fontSize} fontWeight={fontWeight}>
        {title}
      </S.Text>
    </S.Button>
  );
}
