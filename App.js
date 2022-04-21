import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './store';
import Screens from './navigation/Screens';
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  return (
      <SafeAreaProvider>
        <StatusBar />
        <Provider store={store}>
        <Screens/>
        </Provider>
        <StatusBar style="auto"/>
      </SafeAreaProvider>
  );
}
