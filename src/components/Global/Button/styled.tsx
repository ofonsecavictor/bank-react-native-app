import styled from 'styled-components/native';
import {colors} from '../../../theme/theme';

export interface CommonProps {
  primary: boolean;
  width: string | number;
  height: string | number;
  borderRadius: string | number;
  color: string;
  fontSize: string | number;
  top: string;
  bottom: string;
  fontWeight: string;
}

export const Button = styled.TouchableOpacity`
  background-color: ${({primary}: CommonProps) =>
    primary ? colors.secondary : 'transparent'};
  border-color: ${({primary}: CommonProps) =>
    primary ? 'transparent' : colors.lightBackground};
  width: ${(props: {width: CommonProps}) =>
    props.width ? props.width : '90%'};
  height: ${(props: {height: CommonProps}) =>
    props.height ? props.height : '50px'};
  border-radius: ${(props: {borderRadius: CommonProps}) =>
    props.borderRadius ? props.borderRadius : '100px'};
  justify-content: center;
  border-width: ${({primary}: CommonProps) => (primary ? '0px' : '1px')};
  justify-content: center;
  align-items: center;
  margin-top: ${(props: {top: CommonProps}) => (props.top ? props.top : '0px')};
  margin-bottom: ${(props: {bottom: CommonProps}) =>
    props.bottom ? props.bottom : '0px'};
`;

export const Text = styled.Text`
  color: ${({primary}: CommonProps) =>
    primary ? colors.background : colors.lightBackground};
  font-size: ${(props: {fontSize: CommonProps}) =>
    props.fontSize ? props.fontSize : '16px'};
  font-weight: ${(props: {fontWeight: CommonProps}) =>
    props.fontWeight ? props.fontWeight : '400'};
`;
