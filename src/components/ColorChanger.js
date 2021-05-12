import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const ColorChanger = (props) => {
	
	return(
	
	<View>
	<Text>{props.color}</Text>
	<Button 
	title={`Increase ${props.color}`}
	onPress={()=>props.onIncrease()}
	/>
	<Button 
	title={`Decrease ${props.color}`}
	onPress={()=>props.onDecrease()}
	/>
	
	
	
	</View>
	);
}

export default ColorChanger;