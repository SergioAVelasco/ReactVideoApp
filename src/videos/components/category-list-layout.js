import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const categoryListLayout = (props) => {
    return (
        <ImageBackground
            source = {require('./../../../images/background.png')}
            style = {styles.container}
        >
                <Text style = {styles.title}>{props.title}</Text>
                {
                    props.children
                }
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30, 
        paddingHorizontal: 10, 
    }, 
    title:{
        color: '#4c4c4c', 
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
    },
})

export default categoryListLayout
