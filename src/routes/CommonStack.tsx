import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainTab} from './MainTab';
import {BoletoScreen} from '../screens/Common/Boletos';
import {colors} from '../theme/theme';
import {
  renderBoletoRightHeaderComponent,
  renderExtractBoletoHeaderComponent,
} from '../components/Global/Headers/homeHeader';
import {useNavigation} from '@react-navigation/native';
import {TransferScreen} from '../screens/Common/Tranferencia';
import {PaymentScreen} from '../screens/Common/Pagamento';
import {RecargaScreen} from '../screens/Common/Recarregar';
import {Platform} from 'react-native';
export type CommonStackProps = {
  MainTab: undefined;
  Boletos: undefined;
  Transferencia: undefined;
  Pagamento: undefined;
  Recarga: undefined;
};

const Stack = createStackNavigator<CommonStackProps>();

export function CommonStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen
        name="Boletos"
        component={BoletoScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
          },
          headerTitle: () => null,
          headerLeft: () => renderExtractBoletoHeaderComponent(navigation),
          headerRight: renderBoletoRightHeaderComponent,
        }}
      />
      <Stack.Screen
        name="Transferencia"
        component={TransferScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerTintColor: colors.text,
          headerBackTitle: 'Transferência',
          headerTitle: Platform.OS === 'android' ? 'Transferência' : '',
        }}
      />
      <Stack.Screen
        name="Pagamento"
        component={PaymentScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerTintColor: colors.text,
          headerBackTitle: 'Pagamento',
          headerTitle: Platform.OS === 'android' ? 'Pagamento' : '',
        }}
      />

      <Stack.Screen
        name="Recarga"
        component={RecargaScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerTintColor: colors.text,
          headerBackTitle: 'Recarga',
          headerTitle: Platform.OS === 'android' ? 'Recarga' : '',
        }}
      />
    </Stack.Navigator>
  );
}
