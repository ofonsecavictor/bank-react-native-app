/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {colors} from '../../../../../theme/theme';
import {Button, Text} from '../../../../../components';
import * as S from './styled';
import {validationPasswordSchema} from '../../../../../utils';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackProps} from '../../../../../routes/AuthStack';

type NavigationParam = NativeStackNavigationProp<AuthStackProps, 'LoginScreen'>;
export function NewPasswordScreen() {
  const navigation = useNavigation<NavigationParam>();
  const handleToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <>
      <View style={{width: '80%'}}>
        <Text
          fontWeight={300}
          size={'22px'}
          content="Cadastre sua nova senha
          de acesso ao Mauá Bank."
          color={colors.text}
        />
      </View>
      <Formik
        validationSchema={validationPasswordSchema}
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={{password: '', confirmPassword: ''}}
        onSubmit={handleToLogin}>
        {formikProps => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-around',
              }}>
              <View style={{width: '90%'}}>
                <Text
                  color={colors.text}
                  content="Digite sua senha de 6 números"
                  fontWeight={400}
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
                  onBlur={formikProps.handleBlur('password')}
                  value={formikProps.values.password}
                  secureTextEntry={true}
                />
                <Text
                  color={colors.text}
                  content="Confirme sua senha de 6 números"
                  fontWeight={400}
                />
                <S.CustomTextInput
                  placeholder="Digite sua senha"
                  error={
                    !!formikProps.errors.confirmPassword &&
                    formikProps.touched.confirmPassword
                  }
                  onChangeText={(text: string) => {
                    if (text.length <= 6) {
                      formikProps.handleChange('confirmPassword')(text);
                    }
                  }}
                  onBlur={formikProps.handleBlur('password')}
                  value={formikProps.values.confirmPassword}
                  secureTextEntry={true}
                />
              </View>
              <Button
                primary
                title="Salvar e voltar para o login"
                onPress={formikProps.handleSubmit}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </>
  );
}
