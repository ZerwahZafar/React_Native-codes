import React,{useState} from 'react';
import { Text, StyleSheet, TextInput, View, Button, TouchableOpacity} from 'react-native';

const TextScreen = ()=>{
	const [name, setName]=useState('');	
	const [pass, setPass]=useState({
		
		isValidPass: true,
		securepass: true
	
	});
	
	const pass_length = 10;
	
		const message = (value) =>{
			if (value.trim().length < 10 ){
				setPass({
					...pass,
					isValidPass: false
				});
			}
			else {
				setPass({
					...pass,
					isValidPass: true
			});
		}
		}

		
	
	return(
	<View>
	<Text>Enter Name: </Text>
	<TextInput
	style={styles.input}
	autoCapitalize="none"
	autoCorrect={false}
	value={name}
	onChangeText={newValue => setName(newValue)}
	/>

	
	<Text>Enter Password: </Text>
	<TextInput
	style={styles.input}
	autoCapitalize="none"
	autoCorrect={false}
	securepass={pass.securepass ? true : false}
	//value={pass}
	onChangeText={(value) => message(value)}
	/>	
	
	{ pass.isValidPass ? null :
	//<View>
	<Text style={{color: 'red'}}>Password must be 10 characters long. 
	</Text>
	}
	
	<Button
	title="Submit"
	onPress={()=>
		<Text>UserName is: {name}</Text>
	}
/>
</View>
);
};

const styles = StyleSheet.create({
	
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth:1
	}
	
});
export default TextScreen;