import React from 'react';
import {View} from 'react-native';
import {colors} from '../../../../theme/theme';
import {Text} from '../../../Global/Text';
import {Button} from '../../../Global/Button';

interface DoestHaveAccMessageProps {
  onPress: () => void;
}

export function HaveAccountMessage({onPress}: DoestHaveAccMessageProps) {
  const userName = 'Victor';

  const userAccs = [
    {id: 1, AccName: 'Victor Fonseca', CpfOrCnpj: '657.574.587.47'},
    {
      id: 2,
      AccName: 'Victor Fonseca Software LTDA',
      CpfOrCnpj: '23.345.645/0001-45',
    },
  ];
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
          content={`Olá, ${userName}!`}
          fontWeight={700}
        />
        <Text
          fontWeight={300}
          size={'26px'}
          color={colors.text}
          content="Já identificamos suas contas, clique para entrar."
          top={10}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          width: '100%',
          alignItems: 'center',
        }}>
        {userAccs.map(item => {
          return (
            <Button
              isAccAuth
              primary
              title={item.AccName}
              document={item.CpfOrCnpj}
              onPress={onPress}
              top="20px"
              align="flex-start"
              height={60}
            />
          );
        })}
      </View>
    </>
  );
}
