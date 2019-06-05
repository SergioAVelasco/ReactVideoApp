import { connect } from'react-redux'
import React, { Component } from 'react'
import AppNavigator from'./app-navigator'
import { 
    reduxifyNavigator
} from 'react-navigation-redux-helpers'

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp{

}

function mapStateToProps(){
    return {
        navigation: state.navigation
    }
}

export default connect(mapStateToProps)(AppNavigatorWithState)