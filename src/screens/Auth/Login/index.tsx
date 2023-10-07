/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {colors, loginImage, logo} from '../../../theme/theme';
import {Button, MainContainer, Text} from '../../../components';
import * as S from './styled';

export function LoginScreenComponent() {
  return (
    <MainContainer primary>
      <Image source={logo} resizeMode="contain" />
      <Image source={loginImage} resizeMode="contain" style={{marginTop: 20}} />
      <S.TextContainer>
        <Text
          content="Que bom te ver aqui! Vamos abrir a sua conta?"
          size="22px"
          fontWeight="700"
          color={colors.lightBackground}
        />
        <Text
          content="Para iniciar, vamos precisar de alguns dados, ok?"
          size="18px"
          color={colors.lightBackground}
        />
      </S.TextContainer>
      <Button primary title="Vamos lá!" top={'15px'} />
    </MainContainer>
  );
}
