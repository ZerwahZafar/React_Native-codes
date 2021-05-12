import React,{useState} from 'react';
import {StyleSheet, View} from 'react-native';


const FLEX = () =>{
	return (
	
	<View style={styles.viewcontainer}>
	<View style={styles.Sq1}></View>
	<View style={styles.Sq2}></View>
	<View style={styles.Sq3}></View>
	
	</View>
	
	)
}

const styles = StyleSheet.create ({


viewcontainer:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-between'},
	
Sq1:{
        alignSelf:  'flex-start',	
		borderWidth: 60,
		height: 60},
		
Sq2:{
		alignSelf:  'center',
		borderWidth:60,
		height: 60},
		
Sq3: {
	
	    flexDirection:'coloumn',
		alignItem:'flex-end',
		borderWidth:60,
		height: 60}

});

export default FLEX;