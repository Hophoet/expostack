
import React, {useEffect, useState, useRef} from 'react';
import {Animated, TextInput, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import slides from './slides';
import Item from './OnbordingItem';



const Main = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
		//console.log(viewableItems[0].index);

	}).current;
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold:50}).current;

	//console.log(slides)
	return(
		<View style={styles.container}>
			<FlatList
  				data={slides}
                renderItem={({index, item}) => <Item currentIndex={currentIndex} scrollX={scrollX} index={index} item={item}/>}
				
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				bounces={false}
				onScroll={Animated.event(
					[{nativeEvent:{contentOffset:{x:scrollX}}}], 
					{useNativeDriver:false})
				}
				onViewableItemsChanged={viewableItemsChanged}
				viewabilityConfig={viewConfig}
			/>
		</View>
	)

}
export default Main;

const styles = StyleSheet.create({
	container:{
		flex:1,
		//backgroundColor:'#6C63FF'
	},
	title:{
		top:50,
		alignSelf:'center',
		fontSize:50,
		textAlign:'center',
		fontWeight:'bold',
	}


})
