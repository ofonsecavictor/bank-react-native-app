import React from 'react';
import {Button, MainContainer, Text} from '../../../../components';
import {colors} from '../../../../theme/theme';
import * as S from './styled';
import {useTicket} from '../../../../contexts/boletoContext';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';

export function MakePayment() {
  const {ticketNumber, setTicketNumber} = useTicket();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
        <MainContainer primary={false} justify="space-evenly">
          <Text
            size="26px"
            fontWeight={300}
            content="Digite o código do boleto para pagamento"
            color={colors.background}
          />
          <S.CustomTextInput
            placeholder="Digite o boleto"
            value={ticketNumber}
            multiline={true}
            numberOfLines={2}
            onChangeText={(text: number) => setTicketNumber(text)}
          />
          <View style={{width: '100%', alignItems: 'center'}}>
            <Button primary title="Pagar" width="50%" fontWeight={'600'} />
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              height: 130,
              justifyContent: 'space-between',
            }}>
            <Text
              content="Compartilhe o boleto"
              color={colors.background}
              size="26px"
              fontWeight="400"
            />
            <Text
              content="Se desejar pagar em agência bancária"
              color={colors.background}
              fontWeight="300"
            />
            <S.ShareButton>
              <Text color={colors.background} content="Compartilhar" />
            </S.ShareButton>
          </View>
        </MainContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
