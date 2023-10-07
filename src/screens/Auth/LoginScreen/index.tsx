/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors, login3, logo} from '../../../theme/theme';
import {Button, MainContainer, Text} from '../../../components';
import * as S from './styled';
import {TextInput} from 'react-native-paper';

export function LoginScreen() {
  return (
    <MainContainer primary>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{
            width: '100%',
            alignItems: 'center',
          }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Image
            source={logo}
            resizeMode="contain"
            style={{borderRadius: 10}}
          />
          <Image
            source={login3}
            resizeMode="contain"
            style={{borderRadius: 10}}
          />
          <S.TextContainer>
            <TextInput
              placeholder="Digite seu CPF ou CNPJ"
              keyboardType="number-pad"
              style={{
                width: '80%',
                marginTop: 10,
                borderRadius: 40,
              }}
              error={false}
              activeOutlineColor={colors.secondary}
              underlineColorAndroid={colors.secondary}
              theme={{
                roundness: 40,
              }}
              mode="outlined"
            />
            <TextInput
              style={{
                width: '80%',
                marginTop: 10,
                borderRadius: 40,
              }}
              theme={{
                colors: {
                  placeholder: colors.tertiary,
                  text: '#010D14',
                  background: '#f1f3f3',
                },
                roundness: 40,
              }}
              activeOutlineColor={colors.secondary}
              underlineColorAndroid={colors.secondary}
              mode="outlined"
              error={false}
              placeholder="DIgite sua senha"
              secureTextEntry={true}
            />

            <TouchableOpacity style={{alignSelf: 'flex-end', marginRight: 40}}>
              <Text size={'12px'} color="white" content="Esqueci a senha" />
            </TouchableOpacity>
          </S.TextContainer>
          <Button primary title="Entrar" top={'15px'} />
          <View style={{flex: 1}} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
}
