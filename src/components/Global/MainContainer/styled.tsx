import styled from 'styled-components/native';
import {colors} from '../../../theme/theme';

export interface CommonProps {
  primary: boolean;
  justify: string;
  align: string;
}

export const MainContainer = styled.TouchableOpacity`
  background-color: ${({primary}: CommonProps) =>
    primary ? colors.primary : 'transparent'};
  flex: 1;
  justify-content: ${(props: {justify: CommonProps}) =>
    props.justify ? props.justify : 'center'};
  align-items: ${(props: {align: CommonProps}) =>
    props.align ? props.align : 'center'};
`;
