import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HomeHeader} from '../../../components/Home/Header';

export function ExtractScreen() {
  return (
    <SafeAreaView>
      <HomeHeader />

      <Text>ExtractScreen</Text>
    </SafeAreaView>
  );
}
