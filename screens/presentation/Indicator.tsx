
import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'


const Indicator = ({item, index, scrollX, currentIndex}:any) => {
    let indicators = [{id:0}, {id:1}, {id:2}, {id:3}]
    // console.log('index', index);
    //console.log('item', item);
    // console.log('scrollX', scrollX);
    // console.log('currend index', currentIndex)

	return(
		<View style={styles.container}>
            {
                indicators.map((it) => {
                    return (
                        <View style={[styles.indicator, (it.id!=currentIndex)?styles.indicator2:{}]}>
                        </View>
                    )
                })
            }
		</View>
	)

}
export default Indicator;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
        flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
        paddingVertical:50,
		//backgroundColor:'red',
    },
    indicator:{
        width:width/10,
        height:4,
		backgroundColor:'#6C63FF',
        marginHorizontal:5,
    },
    indicator2:{
        opacity:.3,
    }
})