import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';
import {useModal} from '../../../contexts/modalContext';
import {DoestHaveAccMessage} from './components/doestHaveAcc';
import {HaveAccountMessage} from './components/haveAccount';
import {useAuth} from '../../../contexts/authContext';
import ReactNativeBiometrics from 'react-native-biometrics';
import {colors} from '../../../theme/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AuthModalProps {
  isVisible: boolean;
  dataResponse: any;
}

export function AuthModal({isVisible, dataResponse}: AuthModalProps) {
  const [biometricFailed, setBiometricFailed] = useState(false);
  const {toggleModal} = useModal();
  const {setIsLogged} = useAuth();

  const handleCloseModal = () => {
    toggleModal({
      Auth: {
        isOpen: false,
      },
    });
    setBiometricFailed(false);
  };

  const handleTouchIDAuthentication = () => {
    const rnBiometrics = new ReactNativeBiometrics();

    rnBiometrics
      .simplePrompt({
        promptMessage: 'Autenticar com biometria',
        cancelButtonText: 'Cancelar',
      })
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          setIsLogged(true);
          console.log('SUCESSO');
          handleCloseModal();
        } else {
          console.log('CANCELADO PELO USUÁRIO');
          setBiometricFailed(true);
        }
      })
      .catch(() => {
        console.log('BIOMETRIA FALHOU');
        setBiometricFailed(true);
      });
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0}
      onBackdropPress={handleCloseModal}
      style={{margin: 0}}
      statusBarTranslucent>
      <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
        <BlurView style={{flex: 1}} blurType="light">
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <TouchableOpacity
              style={{position: 'absolute', top: 50, zIndex: 999, right: 15}}
              onPress={handleCloseModal}>
              <MaterialCommunityIcons
                name="close"
                size={40}
                color={colors.secondary}
              />
            </TouchableOpacity>
            {dataResponse === false && (
              <DoestHaveAccMessage onPress={handleCloseModal} />
            )}
            {dataResponse === true && !biometricFailed && (
              <HaveAccountMessage onPress={handleTouchIDAuthentication} />
            )}
            {biometricFailed && (
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  bottom: 0,
                  position: 'absolute',
                  alignContent: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    alignSelf: 'center',
                  }}>
                  Autenticar com senha:
                </Text>
                <View style={{width: '100%', alignItems: 'center'}}>
                  <Text style={{color: 'white'}}>Felipe Assumpção</Text>
                  <Text style={{color: 'white'}}>457.657.768-90</Text>
                </View>
                <View>
                  <TextInput
                    secureTextEntry
                    placeholder="Digite sua senha"
                    style={{
                      paddingLeft: 15,
                      backgroundColor: colors.text,
                      borderRadius: 30,
                      height: 50,
                    }}
                    onChangeText={text => {
                      console.log(text);
                    }}
                  />
                </View>
                <TouchableOpacity>
                  <Text style={{color: colors.secondary, alignSelf: 'center'}}>
                    Esqueci a minha senha
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </BlurView>
      </KeyboardAvoidingView>
    </Modal>
  );
}
