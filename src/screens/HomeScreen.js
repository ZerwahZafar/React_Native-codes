

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen=(props) => {
  return (
  <View style={styles.textStyle}>
    <Button
	title="Go to Components"
	onPress={()=>props.navigation.navigate('Component')}
	/>
	<View style={styles.textStyle} />
	<TouchableOpacity onPress={()=>props.navigation.navigate('Flat')} style={styles.container}>
		<Text style={styles.buttonText}>click to go to FlatScreen</Text>
	</TouchableOpacity>
	<View style={styles.textStyle} />
	<Button
	title="Go to Image"
	onPress={()=>props.navigation.navigate('Image')}
	/>
	
	
	<View style={styles.textStyle} />
	<Button
	title="Go to Counter"
	onPress={()=>props.navigation.navigate('Counter')}
	/>
	
	<View style={styles.textStyle} />
	<Button
	title="Go to Color"
	onPress={()=>props.navigation.navigate('Color')}
	/>
	
	<View style={styles.textStyle} />
	<Button
	title="Go to ColorChanger"
	onPress={()=>props.navigation.navigate('Square')}
	/>
	
	<View style={styles.textStyle} />
	<Button
	title="Go to TextScreen"
	onPress={()=>props.navigation.navigate('Text')}
	/>
	
	<View style={styles.textStyle} />
	<Button
	title="Go to Flex"
	onPress={()=>props.navigation.navigate('flex')}
	/>
	
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 6,
    backgroundColor: '#009688',
    borderRadius: 12,
	paddingVertical: 10,
	paddingHorizontal: 12   
  },
  buttonText:{
	  fontSize:18,
	  color: "#fff",
	  fontWeight: "bold",
	  alignSelf: "center",
	  textTransform: "uppercase"
  },
  textStyle:{
		marginVertical:10
	}
});

export default HomeScreen;
