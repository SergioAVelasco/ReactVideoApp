/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import iconImage from './images/icons/borra.png'
import Home from './src/screens/containers/home' 
import Header from './src/sections/components/header'
import Suggestions from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import API from './src/utils/api'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [], 
    categoryList: [],
  }

  async componentDidMount(){
    const movies = await API.getSuggestion(4); 
    const categories = await API.getList()
    
    this.setState({
      suggestionList: movies, 
      categoryList: categories,
    })
  } 

  render() {
    return (
      <Home>
        <Header >
          <Text>
            Keko1
          </Text>
        </Header>
          <CategoryList  
            list = {this.state.categoryList}
          />
          <Suggestions 
            list = {this.state.suggestionList}
          />
      </Home>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
