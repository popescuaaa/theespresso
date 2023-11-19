import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import {
  SafeAreaView,
  AppRegistry
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Feed from './src/components/Feed';

const App = (): JSX.Element => {

  return (
    <PaperProvider>
        <Feed />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App());

export default App;