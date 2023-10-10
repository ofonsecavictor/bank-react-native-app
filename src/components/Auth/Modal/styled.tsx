import styled from 'styled-components/native';
import {colors} from '../../../theme/theme';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  right: 15px;
  z-index: 999;
`;

export const AuthText = styled.Text`
  color: white;
  font-size: 22px;
  align-self: center;
`;

export const AuthModal = styled(Modal)`
  margin: 0;
`;

export const KeyboardAvoidingViewStyled = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const BiometricButton = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  padding: 10px 20px;
  border-radius: 5px;
`;

export const BiometricButtonText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;

export const ErrorText = styled.Text`
  color: #fc8989;
  align-self: center;
`;

export const ForgotPasswordText = styled.TouchableOpacity`
  color: ${colors.secondary};
  align-self: center;
`;

export const FailedContainer = styled.View`
  width: 100%;
  height: 50%;
  bottom: 0;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`;

export const CustomTextInput = styled(TextInput).attrs({
  theme: {
    colors: {
      placeholder: colors.tertiary,
      text: '#010D14',
      background: '#f1f3f3',
    },
    roundness: 40,
  },
  activeOutlineColor: colors.secondary,
  underlineColorAndroid: colors.secondary,
  mode: 'outlined',
  keyboardType: 'number-pad',
})`
  width: 95%;
  margin-top: 10px;
  border-radius: 40px;
  background-color: ${colors.text};
`;

export const TextContainer = styled.View`
  width: 100%;
  align-items: center;
`;
