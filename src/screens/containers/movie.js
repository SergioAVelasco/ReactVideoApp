import React, { Component } from 'react'
import Layout from './../components/movie'
import Player from './../../player/containers/player'
import Header from '../../sections/components/header'
import Close from './../../sections/components/close'
import Details from './../../videos/components/details'
import { connect } from 'react-redux'

class Movie extends Component {
    closeVideo = (params) => {
        this.props.dispatch({
            type : 'SET_SELECTED_MOVIE', 
            payload: {
                movie: null,
            }
        })
    }
    
    render() {
        return (
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
        )
    }
}

function mapStateToProps(state){
    return {
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie)
