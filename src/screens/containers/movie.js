import React, { Component } from 'react'
import Layout from './../components/movie'
import Player from './../../player/containers/player'
import Header from '../../sections/components/header'
import Close from './../../sections/components/close'
import Details from './../../videos/components/details'
import { connect } from 'react-redux'
import { Animated } from 'react-native'

class Movie extends Component {
    state = {
        opacity: new Animated.Value(0),
    }
    closeVideo = (params) => {
        this.props.dispatch({
            type : 'SET_SELECTED_MOVIE', 
            payload: {
                movie: null,
            }
        })
    }
    componentDidMount(){
        Animated.timing(
            this.state.opacity, 
            {
                toValue: 1, 
                duration: 1000, 
            }
        ).start()
    }
    render() {
        return (
            <Animated.View
                style = {{
                    flex:1,
                    opacity: this.state.opacity,
                }}
            >
                <Layout>
                    <Header>
                        <Close 
                            onPress = {this.closeVideo}
                            />
                    </Header>
                    <Player />
                    <Details 
                        {...this.props.movie}
                        />
                </Layout>
            </ Animated.View>
        )
    }
}

function mapStateToProps(state){
    return {
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie)
