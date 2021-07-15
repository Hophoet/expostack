
import React, {useEffect, useState, useRef} from 'react';
import {Animated, ImageBackground, TextInput, StatusBar, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'



const GetStarted = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return(
		<View style={styles.container}>
			<ImageBackground
				style={styles.imageBackground}
				source={require('../../assets/bg.jpg')}
				blurRadius={0}
			>
			<StatusBar 
			 />
			<View style={styles.row1}>
				<TouchableOpacity style={styles.button} >
					<Text style={styles.buttonLabel}> Get Started</Text>
				</TouchableOpacity>

			</View>
			</ImageBackground>
		</View>
	)

}
export default GetStarted;

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'rgb(255, 25, 0)',
		justifyContent:'flex-end',
	
	},
	row1:{
		//backgroundColor:'blue',
		padding:20,
		
	},
	button:{
		backgroundColor:'red',
		justifyContent:'center',
		alignItems:'center',
		padding:20,
		borderRadius:90,
	},	
	buttonLabel:{
		color:'white',
		fontSize:20,
		fontWeight:'bold',
	},
	title:{
		top:50,
		alignSelf:'center',
		fontSize:50,
		textAlign:'center',
		fontWeight:'bold',
	},
	imageBackground:{
		flex:1,
		justifyContent:'flex-end',
	}


})
