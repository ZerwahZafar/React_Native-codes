//Lists and Arrays
import React from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen =()=>{
	return(
	<View>
	<ImageDetail 
	title="Favicon"
	imageSource={require('../../assets/favicon.png')}
	/>
	
	
	<ImageDetail 
	title="Icon"
	imageSource={require('../../assets/icon.png')}
	/>
	
	<ImageDetail 
	title="Splash"
	imageSource={require('../../assets/splash.png')}
	/>
	
	</View>
	);
};

export default ImageScreen;