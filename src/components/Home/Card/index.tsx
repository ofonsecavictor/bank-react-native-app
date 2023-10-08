import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../theme/theme';

export function CardNoticeComponent() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        width: '95%',
        marginTop: 10,
        height: 135,
        borderRadius: 20,
        justifyContent: 'center',
        padding: 20,
      }}>
      <Text style={{color: 'white'}}>Card</Text>
    </TouchableOpacity>
  );
}
