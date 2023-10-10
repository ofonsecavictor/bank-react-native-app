/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {login3, logo} from '../../../theme/theme';
import {Button, MainContainer, Text} from '../../../components';
import * as S from './styled';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../../utils/authValidation';
import {formatCpfCnpj} from '../../../utils/functions';
import {AuthModal} from '../../../components/Auth/Modal';
import {useModal} from '../../../contexts/modalContext';

export function LoginScreen() {
  const [maskedCpfCnpj, setMaskedCpfCnpj] = useState('');
  const {modal, toggleModal} = useModal();

  const handleOpenModal = (key: string) => {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
  };

  const handleLogin = (values: any) => {
    if (values) {
      handleOpenModal('Auth');
      console.log(values);
    }
  };

  return (
    <MainContainer primary>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.KeyboardAvoidingView behavior={'padding'}>
          <Image
            source={logo}
            resizeMode="contain"
            style={{borderRadius: 10}}
          />
          <S.Image source={login3} resizeMode="contain" />
          <S.TextContainer>
            <Formik
              validationSchema={loginValidationSchema}
              validateOnChange={false}
              validateOnBlur={true}
              initialValues={{cpfCnpj: '', password: ''}}
              onSubmit={handleLogin}>
              {formikProps => (
                <>
                  <S.CustomTextInput
                    placeholder="Digite seu CPF ou CNPJ"
                    error={
                      !!formikProps.errors.cpfCnpj &&
                      formikProps.touched.cpfCnpj
                    }
                    onChangeText={(text: string) => {
                      if (text.length <= 18) {
                        formikProps.handleChange('cpfCnpj')(text);
                        setMaskedCpfCnpj(formatCpfCnpj(text));
                      }
                    }}
                    onBlur={formikProps.handleBlur('cpfCnpj')}
                    value={maskedCpfCnpj}
                  />
                  <S.CustomTextInput
                    placeholder="Digite sua senha"
                    error={
                      !!formikProps.errors.password &&
                      formikProps.touched.password
                    }
                    onChangeText={(text: string) => {
                      if (text.length <= 6) {
                        formikProps.handleChange('password')(text);
                      }
                    }}
                    onBlur={formikProps.handleBlur('cpfCnpj')}
                    value={formikProps.values.password}
                    secureTextEntry={true}
                  />
                  <S.ForgotButton>
                    <Text
                      size={'12px'}
                      color="white"
                      content="Esqueci a senha"
                    />
                  </S.ForgotButton>
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
                      !!formikProps.errors.password ||
                      formikProps.values.cpfCnpj === '' ||
                      formikProps.values.password === ''
                    }
                    onPress={formikProps.handleSubmit}
                  />
                </>
              )}
            </Formik>
          </S.TextContainer>
        </S.KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <AuthModal isVisible={modal?.Auth?.isOpen} dataResponse={true} />
    </MainContainer>
  );
}
