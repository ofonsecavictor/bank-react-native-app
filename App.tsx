import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {Routes} from './src/routes/routes';

function App() {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}

export default App;
