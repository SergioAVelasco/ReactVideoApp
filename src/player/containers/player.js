import React, { Component } from 'react'
import Video from 'react-native-video'
import { StyleSheet, ActivityIndicator , Text} from 'react-native'
import Layout from './../components/layout'
import ControlLayout from './../components/control-layout'
import PlayPause from './../components/play-pause'

class Player extends Component{
    state = {
        loading : true,
        paused: false, 
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({loading:isBuffering})
    }
    playPause = (params) => {
        this.setState({paused: !this.state.paused})
    }
    render(){
        return (            
            <Layout
                loading = {
                    this.state.loading
                }
                video = {
                    <Video 
                        source = {{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                        style={styles.backgroundVideo}
                        resizeMode = "contain"
                        onBuffer = {this.onBuffer}
                        onLoad = {this.onLoad}
                        paused = {this.state.paused}
                    />
                }  
                loader = {
                    <ActivityIndicator 
                        color = {'red'}
                    />
                }  
                controls = {
                    <ControlLayout>
                        <PlayPause 
                            onPress = {this.playPause}
                            style = {styles.container}
                            paused = {this.state.paused}
                        />        
                    </ControlLayout> 
                }
            />
          )
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }, 
    container: {

    }
})

export default Player;