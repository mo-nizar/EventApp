import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Route from './navigation/Route';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return <Route />;
}

export default App;
