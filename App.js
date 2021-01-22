import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  render(){
    return(
    	<View>
    		<AppContainer />
    	</View>
	)
  }
}

const TabNavigator = createSwitchNavigator({
	ScanScreen: {screen: ScanScreen}
})

const AppContainer = createAppContainer(TabNavigator);
