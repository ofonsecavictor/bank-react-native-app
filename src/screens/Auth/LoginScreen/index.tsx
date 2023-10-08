/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonStackProps} from '../../../routes/CommonStack';
import {useAuth} from '../../../contexts/AuthContext';
import TouchID from 'react-native-touch-id';

type NavigationParam = NativeStackNavigationProp<CommonStackProps, 'MainTab'>;

export function LoginScreen() {
  const {setIsLogged} = useAuth();
  const [maskedCpfCnpj, setMaskedCpfCnpj] = useState('');
  const navigation = useNavigation<NavigationParam>();
  const handleLogin = (values: any) => {
    if (values) {
      setIsLogged(true);
      console.log(values);
      navigation.navigate('MainTab');
    }
  };
  const handleTouchIDAuthentication = async () => {
    try {
      const biometryType = await TouchID.isSupported();
      if (biometryType === 'FaceID' || biometryType === 'TouchID') {
        const success = await TouchID.authenticate();
        if (success) {
          setIsLogged(true);
          console.log('SUCESSO');
          navigation.navigate('MainTab');
        } else {
          console.log('FALHOU');
        }
      } else {
        console.log('NAO SUPORTADO');
      }
    } catch (error) {
      console.log('ERROR:', error);
    }
  };
  useEffect(() => {
    handleTouchIDAuthentication();
  }, []);

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
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              marginTop: 20,
            }}
            onPress={handleTouchIDAuthentication}>
            <Text size={'16px'} color="white" content="Entrar com biometria" />
          </TouchableOpacity>
          <View style={{flex: 1}} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
}
