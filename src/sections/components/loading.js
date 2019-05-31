import React from 'react'
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'

const Loading = () => {
    return (
        <View style = {styles.container}>
            <Image
                source = {require('./../../../images/icons/borra.png')}
                style={styles.logo}
            />
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain', 
        marginBottom: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Loading
