import React, {useState, useEffect, useRef} from 'react';
import BarcodeMask from 'react-native-barcode-mask';
import * as S from './styled';
import {Alert, Dimensions} from 'react-native';
import {Button} from '../../../components';

export const PaymentScreen = () => {
  const [barcodeData, setBarcodeData] = useState(null);
  const cameraRef = useRef(null);

  const onBarCodeRead = (event: any) => {
    setBarcodeData(event.data);
  };

  useEffect(() => {
    if (barcodeData) {
      Alert.alert('Barcode data:', barcodeData);
    }
  }, [barcodeData]);

  return (
    <S.Container>
      <S.Preview ref={cameraRef} onBarCodeRead={onBarCodeRead}>
        <S.InstructionText>Aproxime seu telefone do código</S.InstructionText>
        <S.InstructionText2>
          A digitalização acontecerá automaticamente
        </S.InstructionText2>
        <BarcodeMask
          animatedLineWidth="100%"
          lineAnimationDuration={800}
          edgeColor="transparent"
          animatedLineColor="red"
          width={Dimensions.get('window').width}
          height={200}
          edgeRadius={5}
          showAnimatedLine
        />
      </S.Preview>

      <S.ManualInputContainer>
        <Button primary title="Digitar código de barras" onPress={() => {}} />
      </S.ManualInputContainer>
    </S.Container>
  );
};
