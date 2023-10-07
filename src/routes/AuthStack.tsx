import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreenComponent} from '../screens/Auth/Login';
import {InitSlider} from '../screens/Auth/Welcome';

export type AuthStackProps = {
  LoginScreen: undefined;
};

const Auth = createStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="Slider" component={InitSlider} />
      <Auth.Screen name="LoginScreen" component={LoginScreenComponent} />
    </Auth.Navigator>
  );
}
