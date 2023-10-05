import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../../theme/theme';

export function LoginScreenComponent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}>
      <Text style={{color: colors.lightBackground}}>Login Screen</Text>
    </View>
  );
}
