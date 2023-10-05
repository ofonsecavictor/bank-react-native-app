import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, loginImage, logo} from '../../../theme/theme';

export function LoginScreenComponent() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}>
      <Image source={logo} resizeMode="contain" />

      <Image source={loginImage} resizeMode="contain" style={{marginTop: 20}} />
      <View style={{width: '60%', marginTop: 25}}>
        <Text
          style={{
            color: colors.lightBackground,
            fontWeight: '700',
            textAlign: 'center',
            fontSize: 18,
          }}>
          Que bom te ver aqui! Vamos abrir a sua conta?
        </Text>

        <Text
          style={{
            color: colors.lightBackground,
            textAlign: 'center',
            fontSize: 16,
            marginTop: 25,
          }}>
          Para iniciar, vamos precisar de alguns dados, ok?
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 80,
          height: 50,
          width: '80%',
          borderRadius: 30,
          backgroundColor: colors.secondary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Vamos Lá!</Text>
      </TouchableOpacity>
    </View>
  );
}
