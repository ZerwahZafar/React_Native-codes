import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import ColorChanger from '../components/ColorChanger';

const SqaureScreen = () => {
	
	return(
	
	<View>
	<ColorChanger color="Red" />
	<ColorChanger color="Blue" />
	<ColorChanger color="Green" />
	
	</View>
	
	
	);
}

export default SqaureScreen;