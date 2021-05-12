


//Lists and Arrays
import React from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';


const ListScreen = () => {
const friends = [
{name: 'Mohsin'},
{name: 'Ahmed'},
{name: 'Ziyadd'}
];
return (
<FlatList
horizontal={true}
data={friends}
keyExtractor={(friend)=>friend.name}
renderItem={({item})=>{
return <Text style={styles.textStyle}>{item.name}</Text>;
}
}
/>
//element  --> {item: {name:'Mohsin'}}
);
};//component
const styles = StyleSheet.create({
	textStyle:{
		marginHorizontal:50
	}
}
);
export default ListScreen;