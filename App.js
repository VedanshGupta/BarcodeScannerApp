import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TransactionScreen from './screens/ScanScreen';

export default class App extends Component {
  render(){
    return(
    	<View>
    		<ScanScreen />
    	</View>
	)
  }
}