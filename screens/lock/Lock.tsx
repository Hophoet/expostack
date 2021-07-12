
import React, {useEffect, useState, useRef} from 'react';
import {Animated, TextInput, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import LockNumber from '../../components/LockNumber';



const Lock = () => {
	const [numbers, setNumbes] = useState([
		{id:1, number:9},
		{id:2, number:8},
		{id:3, number:7},
		{id:4, number:6},
		{id:5, number:5},
		{id:6, number:4},
		{id:7, number:3},
		{id:8, number:2},
		{id:9, number:1},
		{id:11, number:''},
		{id:12, number:0},
		{id:111, delete:true, number:'delete'},


	])
	const [code, setCode] = useState('');


	const deleteNumber = () => {
		setCode(code.slice(0, code.length -1));
	}

	return(
		<View style={styles.container}>
			<View style={styles.codeContainer}>
				<Text style={styles.label}>Enter your Passcode</Text>
				<View style={styles.codeContent}>
					{
						Array(code.length)
						.fill()
						.map((item, index) => (
							<Text style={styles.code}>{'* '}</Text>
						))
					}
				</View>
				<Text>{code}</Text>
			</View>
			<View style={styles.lockContainer}>
				{
					numbers.map((item, index) => {
						return(
							<LockNumber 
								setCode={setCode}
								deleteNumber={deleteNumber}
								code={code}
								key={index.toString()}
								item={item}
							/>
						)

					})

				}
			</View>
		</View>
	)

}
export default Lock;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
		//backgroundColor:'#6C63FF'
		justifyContent:'center',
	},
	lockContainer:{
		flex:2,
		flexDirection:'row',	
		maxWidth:width/2,
		alignSelf:'center',
		justifyContent:'center',
		flexWrap:'wrap',
	},
	title:{
		top:50,
		alignSelf:'center',
		fontSize:50,
		textAlign:'center',
		fontWeight:'bold',
	},
	code:{
		fontSize:30,
		textAlign:'center',
	},
	codeContainer:{
		flex:1,
		justifyContent:'flex-end',	
		alignItems:'center',
		//backgroundColor:'red',
	},
	codeContent:{
		flexDirection:'row',
		alignItems:'flex-end',

	},
	label:{
		//backgroundColor:'red',
	}


})
