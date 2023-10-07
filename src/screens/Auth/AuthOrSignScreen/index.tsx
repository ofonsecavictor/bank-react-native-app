/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {loginImage, logo} from '../../../theme/theme';
import {Button, MainContainer} from '../../../components';
import * as S from './styled';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackProps} from '../../../routes/AuthStack';

type NavigationParam = NativeStackNavigationProp<AuthStackProps, 'LoginScreen'>;

export function AuthOrSignScreen() {
  const navigation = useNavigation<NavigationParam>();

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <MainContainer primary>
      <Image source={logo} resizeMode="contain" />
      <Image source={loginImage} resizeMode="contain" style={{marginTop: 20}} />
      <S.TextContainer>
        <Button primary title="Abrir uma conta" top={'15px'} />
        <Button
          primary={false}
          title="Já sou cliente"
          top={'15px'}
          onPress={handleLogin}
        />
      </S.TextContainer>
    </MainContainer>
  );
}
