import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends Component{
	constructor(){
		super();
		this.state({
		hasCameraPermissions: null,
        scanned: false,
        scannedData: '',
        buttonState: 'normal'
		})
	}

	getCameraPermissions = async (id) =>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      
      this.setState({
        hasCameraPermissions: status === "granted",
        buttonState: id,
        scanned: false
      });
    }

    handleBarCodeScanned = async({type, data})=>{
      const {buttonState} = this.state

      if(buttonState==="BookId"){
        this.setState({
          scanned: true,
          scannedBookId: data,
          buttonState: 'normal'
        });
      }
      else if(buttonState==="StudentId"){
        this.setState({
          scanned: true,
          scannedStudentId: data,
          buttonState: 'normal'
        });
      }
      
    }

	render(){
		return(
			<View>
				<Image
                source={require("../assets/220px-Barcode-scanner.jpg")}
                style={{width:200, height: 200}} />
				<TouchableOpacity onPress={this.getCameraPermissions} style={styles.scanButton} title="Barcode Scanner">
					<Text style={styles.buttonText}>Scan QR Code</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	scanButton:{
	      backgroundColor: '#2196F3',
	      padding: 8,
	      margin: 2,
	      width: 74,
	      borderWidth: 1.5,
	      borderLeftWidth: 0
	    },
	    buttonText:{
	      fontSize: 15,
	      textAlign: 'center',
	      marginTop: 10
	    },
});