import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HomeHeader} from '../../../components/Home/Header';
import {colors} from '../../../theme/theme';

export function ExtractScreen() {
  const [showValue, setSHowValue] = useState(false);
  const showAmount = () => {
    setSHowValue(!showValue);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.text}}>
      <HomeHeader isExtract showAmount={showAmount} hasShowAmount={showValue} />

      <Text>ExtractScreen</Text>
    </SafeAreaView>
  );
}
