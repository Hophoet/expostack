import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'

const Train = () => {
    const [fadeValue, setFadeValue] =  useState(new Animated.Value(3))
    useEffect(() => {

    })

    const _fadeAnimation = () => {
		console.log('animate')
        Animated.timing(fadeValue, {
            toValue:100,
            duration:5000,
			useNativeDriver:false,
        }).start()

    }
    

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedView, {top:fadeValue}]}>
                <Text>TO ANIMATE</Text>
            </Animated.View>
            <TouchableOpacity 
				onPress={_fadeAnimation}
				style={styles.btn}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Train

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    animatedView:{
        justifyContent:'center',
        alignItems:'center',
        padding:20,
		backgroundColor:'yellow',
		
    }
})
