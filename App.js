import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigator/appStack';
// redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  
  useEffect(() => {
        SplashScreen.hide()
     
      },)
  return (
      <Provider store={store}>
          <AppStack />
      </Provider>
  );
};
export default App;