import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthOrSignScreen} from '../screens/Auth/AuthOrSignScreen';
import {InitSlider} from '../screens/Auth/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginScreen} from '../screens/Auth/LoginScreen';
import {MainRegisterScreen} from '../screens/Auth/RegisterFlow';

export type AuthStackProps = {
  Slider: undefined;
  AuthOrSignScreen: undefined;
  LoginScreen: undefined;
  Register: undefined;
};

const Auth = createStackNavigator<AuthStackProps>();

export function AuthStack() {
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('hasSeenIntro').then(value => {
      if (value === 'true') {
        setHasSeenIntro(true);
      }
    });
  }, []);

  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      {!hasSeenIntro && <Auth.Screen name="Slider" component={InitSlider} />}
      <Auth.Screen name="AuthOrSignScreen" component={AuthOrSignScreen} />
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
      <Auth.Screen name="Register" component={MainRegisterScreen} />
    </Auth.Navigator>
  );
}
