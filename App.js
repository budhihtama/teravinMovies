import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/homeScreen'

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
     <HomeScreen />
    </View>
  );
};
export default App;
