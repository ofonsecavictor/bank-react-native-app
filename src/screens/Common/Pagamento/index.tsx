/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import BarcodeMask from 'react-native-barcode-mask';
import * as S from './styled';
import {ActivityIndicator, Dimensions, Modal} from 'react-native';
import {Button} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CommonStackProps} from '../../../routes/CommonStack';
import {useTicket} from '../../../contexts/boletoContext';
import {colors} from '../../../theme/theme';

type NavigationParam = NativeStackNavigationProp<
  CommonStackProps,
  'PagarBoleto'
>;

export const PaymentScreen = () => {
  const cameraRef = useRef(null);
  const navigation = useNavigation<NavigationParam>();
  const {ticketNumber, setTicketNumber} = useTicket();
  const [loading, setLoading] = useState(false);
  const [barcodeRead, setBarcodeRead] = useState(false);
  console.log(loading);
  const onBarCodeRead = (event: any) => {
    if (!barcodeRead) {
      setTicketNumber(event.data);
      setBarcodeRead(true);
    }
  };

  useEffect(() => {
    if (!!ticketNumber) {
      setLoading(true);
      const timer = setInterval(() => {
        clearInterval(timer);
        navigation.navigate('PagarBoleto');
        setLoading(false);
        setBarcodeRead(false);
      }, 5000);
      return () => clearInterval(timer);
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

      <Modal visible={loading} transparent={true} animationType="fade">
        <S.ModalContainer>
          <ActivityIndicator size="large" color={colors.secondary} />
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
};
