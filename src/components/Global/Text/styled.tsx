import styled from 'styled-components/native';
import {colors} from '../../../theme/theme';

export interface CommonProps {
  width: string | number;
  borderRadius: string | number;
  color: string;
  fontSize: number;
  fontWeight: string | number;
}

export const Text = styled.Text`
  color: ${(props: {color: CommonProps}) =>
    props.color ? props.color : colors.lightBackground};
  font-size: ${(props: {fontSize: CommonProps}) =>
    props.fontSize ? props.fontSize : 16};
  font-weight: ${(props: {fontWeight: CommonProps}) =>
    props.fontWeight ? props.fontWeight : '500'};
  text-align: center;
`;
