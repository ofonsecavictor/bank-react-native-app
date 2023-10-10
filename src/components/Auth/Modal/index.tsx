/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import * as S from './styled';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../theme/theme';
import {BlurView} from '@react-native-community/blur';
import {DoestHaveAccMessage, HaveAccountMessage} from '../..';
import {Formik} from 'formik';
import {Text} from '../../Global/Text';
import {useAuth, useModal} from '../../../contexts';
import useBiometricAuthentication from '../../../utils/handleTouchId';
import {validationPasswordSchema} from '../../../utils';

interface AuthModalProps {
  isVisible: boolean;
  dataResponse: any;
}

export function AuthModal({isVisible, dataResponse}: AuthModalProps) {
  const [password, setPassword] = useState('');
  const {toggleModal} = useModal();
  const {setIsLogged} = useAuth();
  const {biometricFailed, authenticateWithBiometrics, setBiometricFailed} =
    useBiometricAuthentication();

  useEffect(() => {
    if (password.length === 8) {
      handleLogin();
    }
  }, [password]);

  const handleCloseModal = () => {
    toggleModal({
      Auth: {
        isOpen: false,
      },
    });
    setBiometricFailed(false);
  };
  const handleLogin = () => {
    setIsLogged(true);
    console.log('Login realizado com sucesso');
    handleCloseModal();
  };

  return (
    <S.AuthModal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0}
      onBackdropPress={handleCloseModal}
      style={{margin: 0}}
      statusBarTranslucent>
      <S.KeyboardAvoidingViewStyled behavior={'padding'}>
        <BlurView style={{flex: 1}} blurType="light">
          <S.Container>
            <S.CloseButton onPress={handleCloseModal}>
              <MaterialCommunityIcons
                name="close"
                size={40}
                color={colors.secondary}
              />
            </S.CloseButton>
            {dataResponse === false && (
              <DoestHaveAccMessage onPress={handleCloseModal} />
            )}
            {dataResponse === true && !biometricFailed && (
              <HaveAccountMessage onPress={authenticateWithBiometrics} />
            )}
            {biometricFailed && (
              <Formik
                initialValues={{password: ''}}
                validationSchema={validationPasswordSchema}
                onSubmit={async (values, {setSubmitting}) => {
                  if (values.password.length === 8) {
                    handleLogin();
                    setSubmitting(false);
                  } else {
                    console.log('Senha inválida');
                    setSubmitting(false);
                  }
                }}>
                {({handleChange, handleBlur, values, errors, touched}) => (
                  <S.FailedContainer>
                    <S.AuthText>Autenticar com senha</S.AuthText>
                    <S.TextContainer>
                      <Text content="Felipe Assumpção" color={colors.text} />
                      <Text content="457.657.768-90" color={colors.text} />
                    </S.TextContainer>
                    <S.CustomTextInput
                      placeholder="Digite sua senha"
                      secureTextEntry={true}
                      onChangeText={(text: string) => {
                        handleChange('password')(text);
                        setPassword(text);
                      }}
                      error={!!errors.password && touched.password}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {touched.password && errors.password && (
                      <S.ErrorText>{errors.password}</S.ErrorText>
                    )}
                    <S.ForgotPasswordText>
                      <Text
                        content="Esqueci a minha senha"
                        color={colors.secondary}
                      />
                    </S.ForgotPasswordText>
                  </S.FailedContainer>
                )}
              </Formik>
            )}
          </S.Container>
        </BlurView>
      </S.KeyboardAvoidingViewStyled>
    </S.AuthModal>
  );
}
