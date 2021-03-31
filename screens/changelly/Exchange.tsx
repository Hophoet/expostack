import React, {useEffect, useState} from 'react';
import {TextInput, ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

const Exchange = () => {

	return(
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerFirstRow}>
					<Text style={styles.icon}>{'<'}</Text>
					<Text style={styles.icon}>{'x'}</Text>
				</View>
				<View style={styles.headerSecondRow}>
					<Text>Exchange</Text>
					<Text>Buy</Text>
				</View>
			</View>
			<View style={styles.contentContainer}>
				
				<View style={styles.contentFirstRow}>
					<ScrollView>
					<View style={styles.formFirstRow}>
						<View style={styles.formContainer}>
							<Text style={styles.formTitle}>You send</Text>
							<TextInput
								style={styles.textInput}
								placeholder='0.10168246995'
							/>
						</View>
						<View style={styles.currencyContainer}>
							<View style={styles.currencyFirstColumn}>
								<Text style={styles.currencyName}>Bitcoin</Text>
								<Text style={styles.currencyCode}>BTC</Text>
							</View>
							<View style={styles.currencySecondColumn}>
								<Text>v</Text>	
							</View>
						</View>
					</View>
					<View style={styles.firstContentCenterContainer}>
						<View style={styles.firstContentCenterContainerFirstRow}>
							<Text>TC</Text>
						</View>
						<View style={styles.firstContentCenterContainerSecondRow}>
							<Text>BC</Text>
						</View>
					</View>
					<View style={styles.formFirstRow}>
						<View style={styles.formContainer}>
							<Text style={styles.formTitle}>You send</Text>
							<TextInput
								style={styles.textInput}
								placeholder='0.10168246995'
							/>
						</View>
						<View style={styles.currencyContainer}>
							<View style={styles.currencyFirstColumn}>
								<Text style={styles.currencyName}>Ethereum</Text>
								<Text style={styles.currencyCode}>ETH</Text>
							</View>
							<View style={styles.currencySecondColumn}>
								<Text>v</Text>	
							</View>
						</View>
					</View>
					<Text></Text>		
					<Text></Text>		
					<Text></Text>		
					<Text></Text>		
					<Text></Text>		
					<Text></Text>		
					</ScrollView>
				</View>
				<View style={styles.contentSecondRow}>
					<Text>CONTENT SECOND</Text>		
				</View>
			</View>
			<View style={styles.footerContainer}>
				<Text>FOOTER</Text>		
			</View>
		</View>
	)	
}
export default Exchange;

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:30
	},
	headerContainer:{
		//backgroundColor:'red',
		flex:1,
	},
	headerFirstRow:{
		flexDirection:'row',
		//backgroundColor:'yellow',
		justifyContent:'space-between',
		alignItems:'center',
		flex:1,
		paddingHorizontal:20
	},
	headerSecondRow:{
		flexDirection:'row',
		//backgroundColor:'blue',
		flex:1,
		alignItems:'center',
		justifyContent:'space-evenly'

	},
	contentContainer:{
		//backgroundColor:'gray',
		flex:4,
	},
	contentFirstRow:{
		flex:1,
	},
	contentSecondRow:{
		flex:1,
	},
	formFirstRow:{
		//backgroundColor:'red',
		flexDirection:'row',
		justifyContent:'space-around',
	},
	formContainer:{
		borderColor:'gray',
		borderWidth:StyleSheet.hairlineWidth,
		borderRadius:7,
		flex:2,
		margin:10,
		padding:20,
		
	},
	formTitle:{
		fontSize:12,
		opacity:.5
	},
	textInput:{
		fontSize:20,
	},
	currencyContainer:{
		backgroundColor:'white',
		flexDirection:'row',
		flex:1,
		margin:10,
		borderRadius:7,
		padding:20,
		elevation:10,
	},
	currencyFirstColumn:{
		//backgroundColor:'red',
		flex:2,
		justifyContent:'space-around',
		alignItems:'center'
	},
	currencySecondColumn:{
		//backgroundColor:'blue',
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	currencyName:{
		fontSize:12,
		opacity:.5
	},
	currencyCode:{
		flex:1,
		fontSize:20,
		fontWeight:'bold',

	},
	firstContentCenterContainer:{
		//backgroundColor:'red',	
		flexDirection:'row',
		margin:10,
		justifyContent:'space-between',

	},
	firstContentCenterContainerFirstRow:{
		//backgroundColor:'blue',	
		borderColor:'gray',
		borderWidth:StyleSheet.hairlineWidth,
		padding:15,
		borderRadius:7
	},
	firstContentCenterContainerSecondRow:{
		//backgroundColor:'blue',	
		borderColor:'black',
		borderWidth:StyleSheet.hairlineWidth,
		padding:15,
		borderRadius:7
	},
	footerContainer:{
		backgroundColor:'aqua',
		flex:1,
	},
	icon:{
		fontSize:30
	}

})
