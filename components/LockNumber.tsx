
import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'


const LockNumber = ({item, deleteNumber, setCode, code}:any) => {

	const _action = () => {
		if(item.delete){
			deleteNumber();
		}
		else{
			setCode(code+item.number)
		}
	}

	return(
		<View style={styles.container}>
			<TouchableOpacity
				onPress={_action}
				style={styles.buttonContainer}
			>
			<Text style={[(item.delete)
					?styles.label
					:styles.number]}>{item.number}</Text>
			</TouchableOpacity>
		</View>
	)

}
export default LockNumber;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
    	width:width/6,
        height:width/6,
		//backgroundColor:'red',
		//borderWidth:2,
		//borderColor:'red',
		//justifyContent:'center',
		//alignItems:'center',
    },
	buttonContainer:{
		//backgroundColor:'red',
		justifyContent:'center',
		alignItems:'center',
		flex:1,
	},
    indicator2:{
        opacity:.3,
    },
	number:{
		fontSize:45,
		fontWeight:'bold',
	},
	label:{
		fontSize:17,
	}
})
