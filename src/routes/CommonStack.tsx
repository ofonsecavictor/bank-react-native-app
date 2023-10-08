/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/Common/Home';
import {colors} from '../theme/theme';
import {Image, TouchableOpacity} from 'react-native';
import {MainTab} from './MainTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type CommonStackProps = {
  MainTab: undefined;
  HomeScreen: undefined;
};

const Stack = createStackNavigator<CommonStackProps>();

const renderLeftHeaderComponent = () => (
  <Image
    source={require('../assets/logo.png')}
    style={{height: 40, width: 60, marginLeft: 20}}
  />
);

const renderRightHeaderComponent = () => (
  <TouchableOpacity>
    <MaterialCommunityIcons
      name="logout"
      size={30}
      color={colors.secondary}
      style={{marginRight: 20}}
    />
  </TouchableOpacity>
);

export function CommonStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
          height: 120,
        },
        headerTitle: () => null,
        headerLeft: renderLeftHeaderComponent,
        headerRight: renderRightHeaderComponent,
      }}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
