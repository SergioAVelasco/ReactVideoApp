import React from 'react'
import { View, Text, Image , StyleSheet } from 'react-native'

const Suggestion = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.left}>
                <Image 
                    source = {{
                                uri: props.medium_cover_image
                            }} 
                    style = {styles.cover}
                />
            </View>
            <View style = {styles.right}>
                <Text style = {styles.title}>{props.title}</Text>
                <Text style = {styles.author}>{props.synopsis}</Text>
                <Text style = {styles.rating}>{props.rating}</Text>
                <Text style = {styles.year}>{props.year}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    left:{

    },
    right:{
        paddingLeft: 0,
        paddingRight: 180,
        justifyContent: 'space-around'
    },
    cover:{
        width: 150,
        height: 100, 
        resizeMode: 'contain', 
    },
    title:{
        fontSize: 18, 
        color: '#44546b'
    },
    author:{
        color : '#6b6b6b', 
        fontSize: 14, 
        fontWeight: 'bold',
    },
    year:{
        backgroundColor : '#70b124',
        paddingVertical : 4,
        paddingHorizontal : 6,
        color: 'white', 
        fontSize: 11,
        borderRadius: 5, 
        overflow: 'hidden',
        alignSelf: 'flex-start'
    }, 
    genreContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'red', 
        paddingVertical: 5,
        paddingHorizontal: 7,
    }, 
    rating:{
        fontSize: 16, 
        color : 'green'
    },
})

export default Suggestion
