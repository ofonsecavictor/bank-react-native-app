/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {TextInput, Keyboard} from 'react-native';
import {MainContainer} from '../../../components';
import {ForgotPassSMS} from './components/Sms';
import {NewPasswordScreen} from './components/newPassword';

export function ForgotPasswordScreen() {
  const [smsCode, setSmsCode] = useState(['', '', '', '']);
  const [smsCodeInputed, setSmsCodeInputed] = useState(false);
  const inputRefs = useRef<TextInput[]>([]);

  const handleSmsCodeChange = (index: number, text: string) => {
    if (/^\d*$/.test(text) && text.length <= 1) {
      const newSmsCode = [...smsCode];
      newSmsCode[index] = text;
      setSmsCode(newSmsCode);

      if (index > 0 && text === '') {
        inputRefs.current[index - 1].focus();
      } else if (index < 3 && text !== '') {
        inputRefs.current[index + 1]?.focus();
      } else if (index === 3 && text !== '') {
        Keyboard.dismiss();
      }
    }
  };

  const handleNewPassword = () => {
    setSmsCodeInputed(!smsCodeInputed);
  };

  return (
    <MainContainer primary justify="space-around">
      {!smsCodeInputed && (
        <ForgotPassSMS
          handleSmsCodeChange={handleSmsCodeChange}
          smsCode={smsCode}
          inputRefs={inputRefs}
          handleNewPassword={handleNewPassword}
        />
      )}
      {smsCodeInputed && <NewPasswordScreen />}
    </MainContainer>
  );
}
