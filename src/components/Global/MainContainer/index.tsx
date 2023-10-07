import React, {ReactNode} from 'react';
import * as S from './styled';

interface MainContainerProps {
  children: ReactNode;
  primary: boolean;
}

export function MainContainer({children, primary}: MainContainerProps) {
  return <S.MainContainer primary={primary}>{children}</S.MainContainer>;
}
