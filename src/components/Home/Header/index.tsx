import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../theme/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';

interface HomeHeaderProps {
  isExtract?: boolean;
  showAmount: () => void;
  hasShowAmount: boolean;
}

export function HomeHeader({
  isExtract,
  showAmount,
  hasShowAmount,
}: HomeHeaderProps) {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: '30%',
        padding: 20,
        justifyContent: 'space-between',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '100%',
      }}>
      {!isExtract && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: RFValue(22), color: 'white'}}>
            Olá, Victor!
          </Text>
          <TouchableOpacity onPress={showAmount}>
            <Icon name="visibility" size={30} color={colors.secondary} />
          </TouchableOpacity>
        </View>
      )}

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{fontSize: RFValue(22), color: 'white', fontWeight: 'bold'}}>
            Saldo da conta hoje
          </Text>
          <Text
            style={{
              fontSize: RFValue(22),
              color: colors.secondary,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            {hasShowAmount ? `R$ 0,00` : '********'}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={{marginRight: 5}}>
            <>
              {isExtract && (
                <Icon name="visibility" size={30} color={colors.secondary} />
              )}
              {!isExtract && (
                <MaterialCommunityIcons
                  name="reload"
                  size={20}
                  color={colors.secondary}
                />
              )}
            </>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
