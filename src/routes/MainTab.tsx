/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HomeScreen} from '../screens/Common/Home';
import {colors} from '../theme/theme';
import {ExtractScreen} from '../screens/Common/Extract';

import {
  renderExtractRightHeaderComponent,
  renderExtractLeftHeaderComponent,
  renderLeftHeaderComponent,
  renderRightHeaderComponent,
  renderPerfilLeftHeaderComponent,
} from '../components/Global/Headers/homeHeader';
import {AccountScreen} from '../screens/Common/AccountScreen';
import {useAuth} from '../contexts/authContext';

const Tab = createBottomTabNavigator();

const tabIcons: any = {
  Início: 'home',
  Extrato: 'list',
  Pix: 'pix',
  Cartão: 'credit-card',
  Você: 'person',
};

export function MainTab() {
  const {setIsLogged} = useAuth();

  const logOut = () => {
    setIsLogged(false);
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.secondary,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: '10%',
          padding: 5,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({focused, size}) => {
          const iconName = tabIcons[route?.name];
          const iconColor = focused ? colors.primary : 'gray';

          return (
            <MaterialIcons name={iconName} size={size} color={iconColor} />
          );
        },
      })}>
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
          },
          headerTitle: () => null,
          headerLeft: renderLeftHeaderComponent,
          headerRight: () => renderRightHeaderComponent(logOut),
        }}
      />
      <Tab.Screen
        name="Extrato"
        component={ExtractScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
          },
          headerTitle: () => null,
          headerLeft: renderExtractLeftHeaderComponent,
          headerRight: renderExtractRightHeaderComponent,
        }}
      />
      {/* <Tab.Screen
        name="Pix"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
          },
          headerTitle: () => null,
          headerLeft: renderLeftHeaderComponent,
          headerRight: renderRightHeaderComponent,
        }}
      /> */}
      {/* <Tab.Screen
        name="Cartão"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
          },
          headerTitle: () => null,
          headerLeft: renderLeftHeaderComponent,
          headerRight: renderRightHeaderComponent,
        }}
      /> */}
      <Tab.Screen
        name="Você"
        component={AccountScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            height: 120,
          },
          headerTitle: () => null,
          headerLeft: renderPerfilLeftHeaderComponent,
        }}
      />
    </Tab.Navigator>
  );
}
