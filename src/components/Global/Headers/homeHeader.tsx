import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../theme/theme';

export const renderLeftHeaderComponent = () => (
  <Image
    source={require('../../../assets/logo.png')}
    style={{height: 40, width: 60, marginLeft: 20}}
  />
);

export const renderExtractLeftHeaderComponent = () => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <MaterialIcons name="chevron-left" size={50} color="white" />
    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
      Extrato
    </Text>
  </View>
);

export const renderPerfilLeftHeaderComponent = () => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <MaterialIcons name="chevron-left" size={50} color="white" />
    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
      Perfil
    </Text>
  </View>
);

export const renderExtractBoletoHeaderComponent = (navigation: any) => (
  <TouchableOpacity
    style={{flexDirection: 'row', alignItems: 'center'}}
    onPress={() => navigation.goBack()}>
    <MaterialIcons name="chevron-left" size={50} color="white" />
    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
      Boletos
    </Text>
  </TouchableOpacity>
);

export const renderBoletoRightHeaderComponent = () => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 4,
      padding: 5,
      marginRight: 15,
      borderColor: 'white',
      alignItems: 'center',
    }}>
    <MaterialCommunityIcons
      name="filter"
      size={22}
      color={colors.text}
      style={{marginRight: 5}}
    />
    <Text style={{color: 'white'}}>Filtro</Text>
  </TouchableOpacity>
);

export const renderExtractRightHeaderComponent = () => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 4,
      padding: 5,
      marginRight: 15,
      borderColor: 'white',
      alignItems: 'center',
    }}>
    <MaterialCommunityIcons
      name="calendar"
      size={22}
      color={colors.text}
      style={{marginRight: 5}}
    />
    <Text style={{color: 'white'}}>Período</Text>
  </TouchableOpacity>
);

export const renderRightHeaderComponent = (onPress: () => void) => (
  <TouchableOpacity onPress={onPress}>
    <MaterialCommunityIcons
      name="logout"
      size={30}
      color={colors.secondary}
      style={{marginRight: 20}}
    />
  </TouchableOpacity>
);
