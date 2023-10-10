import styled from 'styled-components/native';
import {colors} from '../../../../../theme/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const SmsCodeContainer = styled.View`
  flex-direction: row;
`;

export const SmsCodeInput = styled.TextInput`
  width: 20%;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.secondary};
  margin-horizontal: 5px;
  text-align: center;
  font-size: 18px;
  color: ${colors.text};
`;
