import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {Routes} from './src/routes/routes';
import {AuthProvider} from './src/contexts/AuthContext';

function App() {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
