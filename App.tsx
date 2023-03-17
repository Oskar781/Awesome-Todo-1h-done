/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import AppContainer from './src/components/app-container';
import Navigator from './src/';

function App(): JSX.Element {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  );
}

export default App;
