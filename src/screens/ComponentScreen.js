


import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
	const name = 'Mohsin';
	const print = <Text style={styles.newStyle}> This is a new file by {name} having id {id}</Text>;
	const id = 2+2;
	return (
	<View>
	{print}
	<Text style={styles.textStyle}>New Line</Text>
	</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	},
	newStyle: 
	{
		fontSize: 60
	}
}
);
export default ComponentScreen;