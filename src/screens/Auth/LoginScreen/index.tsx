/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import {Formik} from 'formik';
import {loginValidationSchema} from '../../../utils/authValidation';
import {formatCpfCnpj} from '../../../utils/functions';

export function LoginScreen() {
  const [maskedCpfCnpj, setMaskedCpfCnpj] = useState('');

  const handleLogin = (values: any) => {
    console.log(values);
  };
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
            style={{borderRadius: 10, height: 250}}
          />
          <S.TextContainer>
            <Formik
              validationSchema={loginValidationSchema}
              validateOnChange={false}
              validateOnBlur={true}
              initialValues={{cpfCnpj: '', password: ''}}
              onSubmit={handleLogin}>
              {formikProps => (
                <>
                  <TextInput
                    placeholder="Digite seu CPF ou CNPJ"
                    keyboardType="number-pad"
                    style={{
                      width: '80%',
                      marginTop: 10,
                      borderRadius: 40,
                    }}
                    error={
                      !!formikProps.errors.cpfCnpj &&
                      formikProps.touched.cpfCnpj
                    }
                    activeOutlineColor={colors.secondary}
                    underlineColorAndroid={colors.secondary}
                    theme={{
                      roundness: 40,
                    }}
                    mode="outlined"
                    onChangeText={text => {
                      if (text.length <= 18) {
                        formikProps.handleChange('cpfCnpj')(text);
                        setMaskedCpfCnpj(formatCpfCnpj(text));
                      }
                    }}
                    onBlur={formikProps.handleBlur('cpfCnpj')}
                    value={maskedCpfCnpj}
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
                    error={
                      !!formikProps.errors.password &&
                      formikProps.touched.password
                    }
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    onChangeText={formikProps.handleChange('password')}
                    onBlur={formikProps.handleBlur('password')}
                    value={formikProps.values.password}
                  />
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 50,
                      marginTop: 10,
                    }}>
                    <Text
                      size={'12px'}
                      color="white"
                      content="Esqueci a senha"
                    />
                  </TouchableOpacity>
                  {(formikProps.errors.cpfCnpj ||
                    formikProps.errors.password) && (
                    <Text
                      top={10}
                      bottom={10}
                      size={'12px'}
                      color="#FC8989"
                      content="Ops! Dados incorretos! Tente novamente."
                    />
                  )}
                  <Button
                    primary
                    title="Entrar"
                    top={'15px'}
                    disabled={
                      !!formikProps.errors.cpfCnpj ||
                      !!formikProps.errors.password
                    }
                    onPress={formikProps.handleSubmit}
                  />
                </>
              )}
            </Formik>
          </S.TextContainer>
          <View style={{flex: 1}} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
}
