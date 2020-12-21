/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppContainer from './src/navigation/routes';


class App extends Component{
  constructor()
  {
    super();
  }

  render(){
    return <AppContainer/>
  }

}




export default App;
