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

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <MainContainer primary>
      <Image source={logo} resizeMode="contain" />
      <Image
        source={loginImage}
        resizeMode="contain"
        style={{
          marginTop: 20,
          minWidth: 150,
          minHeight: 150,
          maxHeight: 250,
          maxWidth: 250,
        }}
      />
      <S.TextContainer>
        <Button
          primary
          title="Abrir uma conta"
          top={'15px'}
          onPress={handleRegister}
        />
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
