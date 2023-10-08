import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStack} from './AuthStack';
import {CommonStack} from './CommonStack';
import {useAuth} from '../contexts/AuthContext';

export function Routes() {
  const {isLogged} = useAuth();

  return (
    <NavigationContainer>
      {!isLogged ? <AuthStack /> : <CommonStack />}
    </NavigationContainer>
  );
}
