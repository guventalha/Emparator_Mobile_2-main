/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import Purchases from 'react-native-purchases';
import Router from './src/Router';
//import {API_KEY} from './src/constants/index';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    //app_user_id burada set edilecek.
    Purchases.setup('UdAEEEQPmsNMgnWupBNDQFivBdvNNODf');
    // Purchases.getPurchaserInfo()
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </>
  );
};

export default App;
