import React, { Component } from 'react'
import Home from './screens/containers/home' 
import Header from './sections/components/header'
import CategoryList from './videos/containers/category-list'
import Suggestions from './videos/containers/suggestion-list'
import API from './utils/api'
import { connect } from 'react-redux'
import Movie from './screens/containers/movie'

class AppLayout extends Component {

    async componentDidMount(){
        const suggestionList = await API.getSuggestion(4); 
        this.props.dispatch({type:'SET_SUGGESTION_LIST',payload:{suggestionList}})
        const categoryList = await API.getList()
        this.props.dispatch({type:'SET_CATEGORY_LIST',payload:{categoryList}})
    } 

    render() {
        if(this.props.selectedMovie){
            return <Movie />
        }
        return (
            <Home>
                <Header />
                <CategoryList />
                <Suggestions />
            </Home>
        )
    }
}

function mapStateToProps(state){
    return {
        selectedMovie: state.selectedMovie,
    }
}

export default connect(mapStateToProps)(AppLayout) 