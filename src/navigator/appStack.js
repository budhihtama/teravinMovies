import React, {useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {useNetInfo} from '@react-native-community/netinfo';
import Home from '../screens/homeScreen';
import SplashScreen from '../screens/splashScreen';
import {connect, useDispatch, useSelector} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function appStack(props) {
  const dispatch = useDispatch()
  const connect = useSelector((state) => state.connection.isLoading)
  const baseUrl =  'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf'
  const netinfo = useNetInfo();
  if (netinfo.type != 'unknown' && !netinfo.isInternetReachable) {
    alert('No Internet Connection!');
  } 

  useEffect(()=>{
    dispatch({type:'CONNECT'})
  },[baseUrl])

  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
      {connect ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
    </Stack.Navigator>
    </NavigationContainer>
  );
}



export default appStack
