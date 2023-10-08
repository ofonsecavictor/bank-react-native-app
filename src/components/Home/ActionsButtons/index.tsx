import React from 'react';
import {Text, TouchableOpacity, Platform} from 'react-native';
import {colors} from '../../../theme/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ActionsButtonsProps {
  text: string;
  iconName: string;
  onPress: () => void;
}

export function ActionsButtons({text, iconName, onPress}: ActionsButtonsProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderWidth: 1,
          borderColor: colors.secondary,
          backgroundColor: colors.text,
          width: '45%',
          height: 90,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        },
        Platform.OS === 'android'
          ? {elevation: 5}
          : Platform.OS === 'ios'
          ? {
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffset: {width: 0, height: 7},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }
          : {},
      ]}>
      <MaterialCommunityIcons
        name={iconName}
        size={40}
        color={colors.secondary}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
