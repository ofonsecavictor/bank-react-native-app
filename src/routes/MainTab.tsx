/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HomeScreen} from '../screens/Common/Home';
import {colors} from '../theme/theme';

const Tab = createBottomTabNavigator();

const tabIcons: any = {
  Início: 'home',
  Extrato: 'list',
  Pix: 'pix',
  Cartão: 'credit-card',
  Você: 'person',
};

export function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.secondary,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 100,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({focused, size}) => {
          const iconName = tabIcons[route?.name];
          const iconColor = focused ? colors.primary : 'black';

          return (
            <MaterialIcons name={iconName} size={size} color={iconColor} />
          );
        },
      })}>
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Extrato"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pix"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cartão"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Você"
        component={HomeScreen}
        options={{
          tabBarBadge: 1,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
