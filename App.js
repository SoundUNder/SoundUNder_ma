import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Router from './src/router/Router.jsx';
import Constants from 'expo-constants';

export default function App () {
  return (
    <NativeRouter>
      <Router />
    </NativeRouter>
  );
}

