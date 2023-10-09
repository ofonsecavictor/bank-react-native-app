import React from 'react';
import {View} from 'react-native';
import {colors} from '../../../../theme/theme';
import {Text} from '../../../Global/Text';
import {Button} from '../../../Global/Button';

interface DoestHaveAccMessageProps {
  onPress: () => void;
}

export function DoestHaveAccMessage({onPress}: DoestHaveAccMessageProps) {
  return (
    <>
      <View
        style={{
          padding: 20,
          justifyContent: 'space-around',
        }}>
        <Text
          size={'24px'}
          color={colors.text}
          content="Olá !"
          fontWeight={700}
        />
        <Text
          fontWeight={300}
          size={'26px'}
          color={colors.text}
          content="Não identificamos seu CPF/CNPJ em nossa base."
          top={10}
        />
        <Text
          fontWeight={300}
          size={'26px'}
          color={colors.text}
          top={10}
          content="Vamos abrir sua conta?"
        />
      </View>
      <Button primary title="Abrir uma conta" onPress={onPress} top="20px" />
    </>
  );
}
