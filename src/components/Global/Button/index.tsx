import React from 'react';
import * as S from './styled';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../theme/theme';

interface ButtonProps {
  primary: boolean;
  width?: string | number;
  height?: string | number;
  title: string | number;
  fontSize?: string | number;
  top?: string;
  bottom?: string;
  fontWeight?: string;
  onPress?: any;
  disabled?: boolean;
  align?: string;
  isAccAuth?: boolean;
  document?: string;
}

export function Button({
  primary,
  width,
  height,
  title,
  fontSize,
  top,
  bottom,
  fontWeight,
  onPress,
  disabled,
  align,
  isAccAuth,
  document,
  ...rest
}: ButtonProps) {
  return (
    <S.Button
      {...rest}
      primary={primary}
      width={width}
      height={height}
      top={top}
      bottom={bottom}
      onPress={onPress}
      disabled={disabled}
      align={align}>
      {!isAccAuth && (
        <S.Text primary={primary} fontSize={fontSize} fontWeight={fontWeight}>
          {title}
        </S.Text>
      )}

      {isAccAuth && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <View>
            <S.Text primary={primary} fontSize={fontSize} fontWeight={600}>
              {title}
            </S.Text>
            <S.Text
              primary={primary}
              fontSize={fontSize}
              fontWeight={fontWeight}>
              {document}
            </S.Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={22}
            color={colors.text}
            style={{marginRight: 15}}
          />
        </View>
      )}
    </S.Button>
  );
}
