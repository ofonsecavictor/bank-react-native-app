import React, {ReactNode} from 'react';
import * as S from './styled';

interface MainContainerProps {
  children: ReactNode;
  primary: boolean;
  justify?: string;
}

export function MainContainer({
  children,
  primary,
  justify,
}: MainContainerProps) {
  return (
    <S.MainContainer primary={primary} justify={justify}>
      {children}
    </S.MainContainer>
  );
}
