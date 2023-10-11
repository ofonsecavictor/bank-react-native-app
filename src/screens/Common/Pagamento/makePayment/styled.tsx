import styled from 'styled-components/native';

import {TextInput} from 'react-native-paper';
import {colors} from '../../../../theme/theme';

export const CustomTextInput = styled(TextInput).attrs({
  theme: {
    colors: {
      placeholder: colors.tertiary,
      text: '#010D14',
    },
  },
  activeUnderlineColor: colors.secondary,
  underlineColor: colors.secondary,
  underlineColorAndroid: colors.secondary,
  mode: 'flat',
  keyboardType: 'number-pad',
})`
  width: 90%;
  margin-top: 10px;
  background-color: 'transparent';
  border-bottom-width: 2px;
  text-align: center;
`;

export const ShareButton = styled.TouchableOpacity`
  width: 50%;
  border-color: ${colors.secondary};
  border-radius: 20px;
  border-width: 2px;
  height: 50px;
  justify-content: center;
`;
