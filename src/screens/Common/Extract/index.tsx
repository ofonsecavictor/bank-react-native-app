import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HomeHeader} from '../../../components/Home/Header';
import {colors} from '../../../theme/theme';

export function ExtractScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.text}}>
      <HomeHeader />

      <Text>ExtractScreen</Text>
    </SafeAreaView>
  );
}
