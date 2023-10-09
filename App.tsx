import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {Routes} from './src/routes/routes';
import {AuthProvider} from './src/contexts/authContext';
import {ModalProvider} from './src/contexts/modalContext';

function App() {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <AuthProvider>
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;
