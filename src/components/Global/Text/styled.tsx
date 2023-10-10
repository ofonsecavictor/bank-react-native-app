import styled from 'styled-components/native';
import {colors} from '../../../theme/theme';

export interface CommonProps {
  width: string | number;
  borderRadius: string | number;
  color: string;
  fontSize: string;
  fontWeight: string | number;
  top: string | number;
  bottom: string | number;
}

export const Text = styled.Text`
  color: ${(props: {color: CommonProps}) =>
    props.color ? props.color : colors.lightBackground};
  font-size: ${(props: {fontSize: CommonProps}) =>
    props.fontSize ? props.fontSize : '16px'};
  font-weight: ${(props: {fontWeight: CommonProps}) =>
    props.fontWeight ? props.fontWeight : '500'};
  margin-top: ${(props: {top: CommonProps}) => (props.top ? props.top : 0)};
  margin-bottom: ${(props: {bottom: CommonProps}) =>
    props.bottom ? props.bottom : 0};

  text-align: center;
`;
