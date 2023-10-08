import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {HomeHeader} from '../../../components/Home/Header';
import {CardNoticeComponent} from '../../../components/Home/Card';
import {ActionsButtons} from '../../../components/Home/ActionsButtons';
import {colors} from '../../../theme/theme';

export function HomeScreen() {
  const Actions = [
    {
      id: 1,
      name: 'Transferir',
      icon: 'send',
      screen: 'Pix',
    },
    {
      id: 2,
      name: 'Boletos',
      icon: 'ticket',
      screen: 'Pix',
    },
    {
      id: 3,
      name: 'Pagamentos',
      icon: 'barcode',
      screen: 'Pix',
    },
    {
      id: 4,
      name: 'Recarregar',
      icon: 'cellphone',
      screen: 'Pix',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.text}}>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <CardNoticeComponent />
        <CardNoticeComponent />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {Actions.map(item => {
            return <ActionsButtons text={item.name} iconName={item.icon} />;
          })}
        </View>
        <View style={{height: 20}} />
      </ScrollView>
    </SafeAreaView>
  );
}
