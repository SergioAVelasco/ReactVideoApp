import React from 'react'
import { View, 
        Text, 
        Image, 
        StyleSheet, 
        SafeAreaView 
    } from 'react-native'
import logo from './../../../images/icons/borra.png'

const Header = (props) => {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container} >
                    <Image 
                        source = {logo}
                        style = {styles.logo} 
                    />
                    <View style={styles.right}>
                        {
                            props.children
                        }
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 30, 
        width: 30,
        resizeMode: 'contain',
    },
    container:{
        backgroundColor:'red',
        paddingVertical : 10,
        paddingHorizontal : 10,
        flexDirection : 'row',
    }, 
    right:{
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'flex-end',
    }
})

export default Header
