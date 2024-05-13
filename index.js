/**
 * @format
 */
import App from './src/App';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';

const Main = () => <App />;

AppRegistry.registerComponent(appName, () => Main);
