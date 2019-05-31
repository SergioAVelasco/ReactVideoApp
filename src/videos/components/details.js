import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Details = (props) => {
    return (
        <View style = {styles.container}>
            <Image 
                style = {styles.cover}
                source = {{uri: props.medium_cover_image}}
            />
            <Text style = {styles.title}>{props.title}</Text>
            <Text style = {styles.description}>{props.description_full}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {

    }, 
    title : {

    }, 
    description: {

    },
    cover: {
        width: 150, 
        height: 150,
    }, 
})

export default Details
