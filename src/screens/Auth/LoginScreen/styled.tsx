import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';
import {colors} from '../../../theme/theme';

export const TextContainer = styled.View`
  width: 100%;
  margin-top: 15px;
  height: 40%;
  justify-content: space-evenly;
  align-items: center;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  margin-top: 15%;
  width: 100%;
  align-items: center;
`;

export const Image = styled.Image`
  min-width: 150px;
  min-height: 150px;
  max-height: 250px;
  max-width: 250px;
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

export const ForgotButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 50px;
  margin-top: 10px;
`;
