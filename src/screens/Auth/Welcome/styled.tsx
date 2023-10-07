import styled from 'styled-components/native';
import {colors} from '../../../theme/theme';

export interface CommonProps {
  active: boolean;
  color: string;
}

export const SlideContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.text};
  align-items: center;
`;

export const Slide = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const SlideImage = styled.Image`
  width: 300px;
  height: 300px;
  resize-mode: contain;
  align-self: center;
`;

export const SlideText = styled.Text`
  font-size: 16px;
  color: ${(props: CommonProps) => props.color || colors.background};
  text-align: center;
  margin-vertical: 10px;
`;

export const DotTextContainer = styled.View`
  margin-top: 10px;
  align-items: center;
  width: 100%;
`;

export const DotIndicators = styled.View`
  flex-direction: row;
  align-items: center;
  top: -70px;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props: CommonProps) =>
    props.active ? colors.secondary : colors.tertiary};
  opacity: ${(props: CommonProps) => (props.active ? 1 : 0.3)};
  margin: 5px;
`;

export const SkipButton = styled.TouchableOpacity`
  z-index: 999999;
  position: absolute;
  bottom: 15px;
  justify-content: center;
  align-items: center;
  height: 50px;
  align-self: center;
`;

export const SkipText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
`;
