/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import BarcodeMask from 'react-native-barcode-mask';
import * as S from './styled';
import {Dimensions} from 'react-native';
import {Button} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonStackProps} from '../../../routes/CommonStack';
import {useTicket} from '../../../contexts/boletoContext';

type NavigationParam = NativeStackNavigationProp<
  CommonStackProps,
  'PagarBoleto'
>;

export const PaymentScreen = () => {
  const cameraRef = useRef(null);
  const navigation = useNavigation<NavigationParam>();
  const {ticketNumber, setTicketNumber} = useTicket();
  const onBarCodeRead = (event: any) => {
    setTicketNumber(event.data);
  };

  useEffect(() => {
    if (ticketNumber) {
      navigation.navigate('PagarBoleto');
    }
  }, [ticketNumber]);

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
