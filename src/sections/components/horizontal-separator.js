import React from 'react'
import { View,  StyleSheet } from 'react-native'

const HorizontalSeparator = () => {
    return (
        <View 
            style = {styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginHorizontal: 1,
    }
})

export default HorizontalSeparator
