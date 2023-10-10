/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import * as S from './styled';
import {colors} from '../../../../../theme/theme';
import {Button, Text} from '../../../../../components';

interface ForgotPassSMSProps {
  handleSmsCodeChange: (index: number, item: string) => void;
  smsCode: string[];
  inputRefs: any;
  handleNewPassword: () => void;
}

export function ForgotPassSMS({
  handleSmsCodeChange,
  smsCode,
  inputRefs,
  handleNewPassword,
}: ForgotPassSMSProps) {
  return (
    <>
      <View style={{width: '80%'}}>
        <Text
          fontWeight={300}
          size={'22px'}
          content="Digite o código que enviamos por SMS no celular cadastrado."
          color={colors.text}
        />
      </View>
      <S.SmsCodeContainer>
        {smsCode.map((digit, index) => (
          <S.SmsCodeInput
            key={index}
            value={digit}
            onChangeText={(text: string) => handleSmsCodeChange(index, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={(input: TextInput | null) => {
              if (input) {
                inputRefs.current[index] = input;
              }
            }}
          />
        ))}
      </S.SmsCodeContainer>
      <TouchableOpacity>
        <Text content="Reenviar código" color={colors.secondary} />
      </TouchableOpacity>

      <Button
        primary
        title="Avançar"
        disabled={smsCode.some(digit => digit === '')}
        onPress={handleNewPassword}
      />
    </>
  );
}
