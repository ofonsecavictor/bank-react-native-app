import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: black;
`;

export const Preview = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const InstructionText = styled.Text`
  color: white;
  font-size: 18px;
  top: 50px;
  position: absolute;
  z-index: 999;
`;

export const InstructionText2 = styled.Text`
  color: white;
  font-size: 18px;
  z-index: 999;
  bottom: 50px;
`;

export const BarcodeDataContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  align-items: center;
`;

export const BarcodeDataText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const ManualInputContainer = styled.View`
  background-color: white;
  padding: 50px;
  align-items: center;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-size: 20px;
  color: #333;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;
