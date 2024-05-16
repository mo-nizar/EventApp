import React from 'react';
import Route from './navigation/Route';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
