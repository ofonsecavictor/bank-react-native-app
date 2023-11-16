/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {HomeHeader} from '../../../components/Home/Header';
import {CardNoticeComponent} from '../../../components/Home/Card';
import {ActionsButtons} from '../../../components/Home/ActionsButtons';
import {colors} from '../../../theme/theme';
import {useNavigation} from '@react-navigation/native';

type RouteKeys = 'Pix' | 'Boletos';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [showValue, setSHowValue] = useState(false);
  const showCards = false;
  const Actions = [
    {
      id: 1,
      name: 'Transferir',
      icon: 'send',
      screen: 'Transferencia',
    },
    {
      id: 2,
      name: 'Boletos',
      icon: 'ticket',
      screen: 'Boletos',
    },
    {
      id: 3,
      name: 'Pagamentos',
      icon: 'barcode',
      screen: 'Pagamento',
    },
    {
      id: 4,
      name: 'Recarregar',
      icon: 'cellphone',
      screen: 'Recarga',
    },
  ];

  const handleNavigation = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const showAmount = () => {
    setSHowValue(!showValue);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.text}}>
      <HomeHeader showAmount={showAmount} hasShowAmount={showValue} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        {showCards && (
          <>
            <CardNoticeComponent />
            <CardNoticeComponent />
          </>
        )}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {Actions.map(item => {
            return (
              <ActionsButtons
                key={item.id}
                text={item.name}
                iconName={item.icon}
                onPress={() => handleNavigation(item.screen as RouteKeys)}
              />
            );
          })}
        </View>
        <View style={{height: 20}} />
      </ScrollView>
    </SafeAreaView>
  );
}
